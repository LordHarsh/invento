'use server';

import { createAdminClient } from '../config';
import { headers } from 'next/headers';
import { OAuthProvider } from 'node-appwrite';

// Initialize the account service
async function getAccount() {
    const { account } = await createAdminClient();
    return account;
}

export async function createOAuth2Session(provider: OAuthProvider) {
    try {
        const account = await getAccount();
        const origin = (await headers()).get("origin");
        return await account.createOAuth2Token(
            provider,
            `${origin}/oauth`,
            `${origin}/signup`, 
        );
    } catch (error) {
        console.log(error);
        throw {
            status: 400,
            message: `Error creating OAuth2 session: ${error}`
        }
    }
}


export async function getCurrentUser() {
    try {
        const account = await getAccount();
        return account.get();
    } catch (error) {
        throw {
            status: 400,
            message: `Error getting current user: ${error}`
        }
    }
}