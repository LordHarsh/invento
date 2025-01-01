"use server";
import "server-only"
import { createSessionClient } from "@/appwrite/config";
import { Query } from "node-appwrite";
import { appwriteCollections } from "../dataService";

export const getCurrentUserDetails = async (accountId: string) => {
    try {
        const { database } = await createSessionClient();
        const { dbId, userCollection } = await appwriteCollections();
        const { $id: userCollectionId } = await userCollection();
        const userData = await database.listDocuments(
            dbId,
            userCollectionId,
            [
                Query.equal("accountId", [accountId])
            ]
        )
        console.log("User Data:", userData);
        return {
            success: true,
            message: "User details fetched successfully",
            data: userData.documents[0]
        }
    } catch (error: Error | any) {
        console.log("Error at getting current User:", error);
        return { success: false, message: error?.message, error };
    }
} 