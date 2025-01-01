// scripts/generate-constants.mjs
import { ID } from "node-appwrite";
import { createAdminClient } from "../config/index.js";
import conf from "../lib/conf.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateConstants() {
    const { database } = await createAdminClient();
    
    const dbList = await database.list([], 'invento-db');
    let db = dbList?.total === 0 
        ? await database.create(ID.unique(), 'invento-db', false)
        : dbList.databases[0];

    const collections = await database.listCollections(db.$id);
    const collectionData = [];

    for (const collectionName of conf.requiredCollections) {
        let collection = collections.collections.find(c => c.name === collectionName);
        
        if (!collection) {
            collection = await database.createCollection(
                db.$id,
                ID.unique(),
                collectionName,
            );
        }
        
        collectionData.push({
            id: collection.$id,
            name: collection.name
        });
    }

    const constants = {
        databaseId: db.$id,
        databaseName: 'invento-db',
        collections: collectionData
    };

    const outputPath = path.join(__dirname, '../src/generated/db-constants.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(constants, null, 2));
}

generateConstants()
    .then(() => console.log('Constants generated successfully'))
    .catch(console.error);