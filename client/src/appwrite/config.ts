import { Client, Database, Account, ID } from 'node-appwrite';

const createAdminClient = async () => {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT || '')
        .setProject(process.env.NEXT_PUBLIC_PROJECT_ID || '')
        .setKey(process.env.NEXT_PUBLIC_API_KEY || '');
    return {
        get account() {
            return new Account(client);
        },
        get database() {
            return new Database(client);
        }
    }
};


export { createAdminClient };