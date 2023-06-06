import express from "express";
import cors from "cors";
import morgan from "morgan";

import todoRoutes from './routes/todoRoutes.js';
import app from "./app.js";

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