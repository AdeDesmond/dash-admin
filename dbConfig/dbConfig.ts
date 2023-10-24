import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI as string);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongoose db connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "mongodb connection error. please make sure mongodb is runnng" + err
      );
      process.exit();
    });
  } catch (err: any) {
    throw new Error(err.message);
  }
};
