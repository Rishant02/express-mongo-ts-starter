import mongoose from 'mongoose';
import config from '../config';
import Logger from './logger';

const connectDB = async () => {
  try {
    const dbUri = config.NODE_ENV === 'development' ? config.MONGO_URI : config.MONGO_TEST_URI;
    const conn = await mongoose.connect(dbUri);
    Logger.info(`[db]: Connected to ${conn.connection.host}`);
  } catch (error) {
    Logger.error(error);
    process.exit(1);
  }
};

export default connectDB;
