import express, { type Request, type Response } from "express";
const app = express();
import cors from "cors";
import { studentRoutes } from "./app/modules/students/student.routes.js";

// Parse JSON request bodies before handlers run.
app.use(express.json())

// Basic health check endpoint.
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Mount student API routes under a versioned prefix.
app.use("/api/v1/students", studentRoutes);

export default app;
