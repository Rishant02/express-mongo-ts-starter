import mongoose from 'mongoose';
import Logger from '../utils/logger';
import { app } from '..';

Logger.level = 'debug';

beforeEach(async () => {
  try {
    const collections = await mongoose.connection.db?.collections();
    for (const collection of collections!) {
      await collection.deleteMany({});
    }
  } catch (error) {
    Logger.error('Error clearing database', error);
  }
});

afterAll(async () => {
  await mongoose.disconnect();
});
