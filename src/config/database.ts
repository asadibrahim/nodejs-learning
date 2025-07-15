import mongoose from 'mongoose';
import keys from "./keys";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(keys.database as string);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
}; 

export default connectDB;
