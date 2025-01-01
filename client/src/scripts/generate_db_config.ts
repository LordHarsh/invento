// scripts/generate-db-config.ts
import { ID } from "node-appwrite";
import { createAdminClient } from "../appwrite/config";
import conf from "@/lib/conf";
import fs from 'fs';
import path from 'path';

async function generateConfig() {
    const { database } = await createAdminClient();
    
    // Get or create database
    const dbList = await database.list([], 'invento-db');
    const db = dbList?.total === 0
        ? await database.create(ID.unique(), 'invento-db', false)
        : dbList.databases[0];

    // Get or create collections
    const collections = await database.listCollections(db.$id);
    const collectionDetails = [];

    for (const collectionName of conf.requiredCollections) {
        let collection = collections.collections.find(c => c.name === collectionName);
        
        if (!collection) {
            collection = await database.createCollection(
                db.$id,
                ID.unique(),
                collectionName,
            );
        }
        
        collectionDetails.push({
            id: collection.$id,
            name: collection.name
        });
    }

    const config = {
        databaseId: db.$id,
        databaseName: 'invento-db',
        collections: collectionDetails
    };

    // Write to both TypeScript and JSON files
    const tsContent = `export const dbConfig = ${JSON.stringify(config, null, 2)} as const;`;
    const configDir = path.join(process.cwd(), 'src', 'config');
    
    if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir, { recursive: true });
    }

    fs.writeFileSync(
        path.join(configDir, 'db-config.ts'), 
        tsContent
    );
    
    fs.writeFileSync(
        path.join(configDir, 'db-config.json'), 
        JSON.stringify(config, null, 2)
    );
}

generateConfig().catch(console.error);