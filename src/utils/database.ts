import mongoose from "mongoose";

const MONGODB_URL =
  "mongodb+srv://root:root@cluster0.8nq6xvf.mongodb.net/nodecrud";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connect to mongodb");
  } catch (error) {
    console.log("Mongodb connection error :", error);
    process.exit(1);
  }
};
