import mongoose from "mongoose";

const MONGODB_URL ="your db";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connect to mongodb");
  } catch (error) {
    console.log("Mongodb connection error :", error);
    process.exit(1);
  }
};
