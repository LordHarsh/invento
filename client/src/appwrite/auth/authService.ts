import { ID, Account } from "node-appwrite";
import { createSessionClient } from "../config";

interface NewUserAccountRequest {
    email: string;
    password: string;
}
interface LoginRequest {
    email: string;
    password: string;
}


export class AppwriteAuthService {
    account!: Account;
    constructor() {
        this.initialize();
    }

    async initialize() {
        const { account } = await createSessionClient();
        this.account = account;
    }

    async createNewUserAccount({ email, password }: NewUserAccountRequest) {
        try {
            if (!this.account) {
                await this.initialize();
            }
            const userAccount = await this.account.create(ID.unique(), email, password);
            if (!userAccount) {
                throw new Error("Failed to create user account");
            }
            return userAccount;
        } catch (error) {
            throw {
                status: 400,
                message: `Error creating new user account: ${error}`
            }
        }
    }

    async login({ email, password }: LoginRequest) {
        try {
            if (!this.account) {
                await this.initialize();
            }
            return this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw {
                status: 400,
                message: `Error logging in: ${error}`
            }
        }
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            if (!this.account) {
                await this.initialize();
            }
            const data = await this.getCurrentUser();
            return Boolean(data);
        } catch (error) {
            throw {
                status: 400,
                message: `Error checking if user is logged in: ${error}`
            }
        }
    }

    async getCurrentUser() {
        try {
            if (!this.account) {
                await this.initialize();
            }
            return this.account.get();
        } catch (error) {
            throw {
                status: 400,
                message: `Error getting current user: ${error}`
            }
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession("current");
        } catch (error) {
            throw {
                status: 400,
                message: `Error logging out: ${error}`
            }
        }
    }
}

const appwriteAuthService = new AppwriteAuthService();
export default appwriteAuthService;