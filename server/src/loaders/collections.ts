import type { Collection } from 'mongodb';
import connectDB from './database';

export const getWorkshopCollection = async (): Promise<Collection> => {
  const db = await connectDB();
  return db.collection('data');
};
