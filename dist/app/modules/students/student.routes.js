import express from "express";
import { studentControllers } from "./student.controller.js";
const router = express.Router();
router.post("/create-student", studentControllers.createStudent);
export const studentRoutes = router;
//# sourceMappingURL=student.routes.js.map