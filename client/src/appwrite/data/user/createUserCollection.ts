import "server-only";
import { createAdminClient } from "@/appwrite/config";
import { ID } from "node-appwrite";
import { cache } from "react";

export const createUserCollection = cache(async (dbId: string) => {
    try {
        const { database } = await createAdminClient();
        const { collections } = await database.listCollections(dbId);
        const userCollection = collections.find((c) => c.name === 'users');
        if (userCollection) {
            return { $id: userCollection.$id, name: userCollection.name };
        }
        const newCollection = await database.createCollection(
            dbId,
            ID.unique(),
            'users',
            [],
            true,
            true,
        );
        await database.createStringAttribute(dbId, newCollection.$id, 'accountId', 30, false);
        await database.createStringAttribute(dbId, newCollection.$id, 'email', 100, false);
        await database.createStringAttribute(dbId, newCollection.$id, 'firstName', 50, false);
        await database.createStringAttribute(dbId, newCollection.$id, 'lastName', 50, false);
        return { $id: newCollection.$id, name: newCollection.name };
    } catch (error) {
        throw (error);
    }
})