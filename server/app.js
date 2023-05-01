import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
if (process.env.NODE_ENV !== "test") connectDB();

const PORT = process.env.PORT || 8000;
const app = express();

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}

export default app;