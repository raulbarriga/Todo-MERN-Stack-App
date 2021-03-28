import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import todoRoutes from './routes/todoRoutes.js';

dotenv.config();
connectDB();

const hostname = "localhost";
const PORT = process.env.PORT || 8000;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/todos", todoRoutes);

app.use((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}`);
});
