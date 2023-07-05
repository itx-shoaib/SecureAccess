import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

export const database = async () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to Mongo"))
      .catch((error) => console.log(error.message));
};