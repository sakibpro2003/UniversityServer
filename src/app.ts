import express, { type Request, type Response } from "express";
const app = express();
import cors from "cors";

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
