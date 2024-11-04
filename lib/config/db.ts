import mongoose from "mongoose";
const mongoURI = process.env.MONGODB_URI as string;

export const connectDB = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log("MongoDB connection error:", err));
};
