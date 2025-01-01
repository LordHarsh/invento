import "server-only";
import { cookies } from 'next/headers';
import { Client, Databases, Account } from 'node-appwrite';

const createAdminClient = async () => {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT || '')
        .setProject(process.env.NEXT_PUBLIC_PROJECT_ID || '')
        .setKey(process.env.NEXT_APPWRITE_KEY || '');

    return {
        get account() {
            return new Account(client);
        },
        get database() {
            return new Databases(client);
        }
    }
};

const createSessionClient = async () => {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT || '')
        .setProject(process.env.NEXT_PUBLIC_PROJECT_ID || '')
    const session = (await cookies()).get("invento-session")
    if (!session || !session.value) {
        throw new Error("No session");
    }
    client.setSession(session.value);


    return {
        get account() {
            return new Account(client);
        },
        get database() {
            return new Databases(client);
        },
        // get users() {
        //     return new Users(client);
        // }
    }
};

export { createAdminClient, createSessionClient};