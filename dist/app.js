import express, {} from "express";
const app = express();
import cors from "cors";
import { studentRoutes } from "./app/modules/students/student.routes.js";
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api/v1/students", studentRoutes);
export default app;
//# sourceMappingURL=app.js.map