"use server"
import 'server-only';
import { ID, Permission, Role } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../config";
import { cookies } from "next/headers";
import { appwriteCollections } from "../data/dataService";
import { getCurrentUserDetails } from "../data/user/userHandler";


interface LoginRequest {
    email: string;
    password: string;
}

// interface OAuth2Session {
//     provider: OAuthProvider;
//     code: string;
//     redirect: string;
// }

interface SignupRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const userAccount = await account.get();
        const userDetails = await getCurrentUserDetails(userAccount.$id);
        return {
            success: true,
            message: "User details fetched successfully",
            data: userDetails.data
        };
    } catch (error: Error | any) {
        console.log("Error at authService:", error);
        return { success: false, message: error };
    }
}

export async function signup({ firstName, lastName, email, password }: SignupRequest) {
    try {
        const { account, database } = await createAdminClient();
        const name = `${firstName} ${lastName}`;
        const newUserAccount = await account.create(
            ID.unique(),
            email,
            password,
            name
        );
        if (!newUserAccount) {
            throw new Error("Failed to create user account");
        }
        const { dbId, userCollection } = await appwriteCollections();

        const userCollectionData = await userCollection();
        const newUserDocument = await database.createDocument(
            dbId,
            userCollectionData.$id,
            ID.unique(),
            {
                accountId: newUserAccount.$id,
                email,
                firstName,
                lastName,
            },
            [
                Permission.read(Role.user(newUserAccount.$id)),
            ]
        );
        if (!newUserDocument) {
            throw new Error("Failed to create user document");
        }
        const session = await account.createEmailPasswordSession(email, password);

        (await cookies()).set("invento-session", session.secret, {
            path: "/",
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            expires: Date.parse(session.expire),
        })
        return { success: true };
    } catch (error: Error | any) {
        console.log("Error at authService:", error);
        console.log(error?.response);
        return { success: false, message: error?.message, error };
    }
}

export const login = async ({ email, password }: LoginRequest) => {
    try {
        const { account } = await createAdminClient();
        const session = await account.createEmailPasswordSession(email, password);
        (await cookies()).set("invento-session", session.secret, {
            path: "/",
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            expires: Date.parse(session.expire),
        })
        return { success: true };
    } catch (error: Error | any) {
        console.log("Error at authService:", error);
        return { success: false, message: error?.message, error };
    }
} 