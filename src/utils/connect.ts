import mongoose from 'mongoose';
import config from '../config';
import Logger from './logger';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI);
    Logger.info(`[db]: Connected to ${conn.connection.host}`);
  } catch (error) {
    Logger.error(error);
    process.exit(1);
  }
};

export default connectDB;
