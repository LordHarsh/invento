import 'server-only';
import { ID } from "node-appwrite";
import { createAdminClient } from "../config";
import { createUserCollection } from './user/createUserCollection';

async function initializeDatabase() {
    try {
        const { database } = await createAdminClient();
        const list = await database.list(
            [],
            'invento-db',
        );
        if (list?.total === 0) {
            const result = await database.create(
                ID.unique(),
                'invento-db',
                true
            );
            console.log("No database found, Created a new database:\n", result);
            return result;
        }
        return list?.databases[0];
    } catch (error) {
        throw (error);
    }
}

export async function appwriteCollections() {
    try {
        const { '$id': dbId } = await initializeDatabase();
        console.log("Database ID: ", dbId);
        return {
            get dbId() {
                return dbId;
            },
            userCollection: () => createUserCollection(dbId)
        }
    } catch (error) {
        throw (error);
    }
}
