import express, { type Request, type Response } from "express";
const app = express();
import { studentRoutes } from "./app/modules/students/student.routes.js";
import { UserRoutes } from "./app/modules/users/user.route.js";
import globalErrorHandler from "./app/modules/middlewares/globalErrorHandler.js";

// Parse JSON request bodies before handlers run.
app.use(express.json());

// Basic health check endpoint.
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Mount student API routes under a versioned prefix.
app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/user", UserRoutes);

app.use(globalErrorHandler);

export default app;
