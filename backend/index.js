import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { model } from "mongoose";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3001;
const URL = process.env.MONGODB_URL;

try {
  await mongoose.connect(URL, {});
  console.log("MongoDB Connection Success");
} catch (error) {
  console.error("MongoDB Connection Error:", error);
}

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT} 🚀🚀🚀`);
});
