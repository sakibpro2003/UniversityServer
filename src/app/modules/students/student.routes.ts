import express from "express";
import { studentControllers } from "./student.controller.js";

const router = express.Router();

// Create student endpoint
router.post("/create-student", studentControllers.createStudent);
router.get("/get-all-students", studentControllers.getAllStudents);
router.get("/:studentID", studentControllers.getSingleStudent);
export const studentRoutes = router;
