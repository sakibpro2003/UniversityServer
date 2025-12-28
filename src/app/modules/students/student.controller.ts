import type { Request, Response } from "express";
import { studentServices } from "./student.service.js";

// HTTP handler for creating a student.
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    const result = await studentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: "Student created",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Student retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  const id = req.params.studentID as string;
  const result = await studentServices.getSingleStudentFromDB(id);
  res.status(200).json({
    success: true,
    message: "Student is retrieve successfully",
    data: result,
  });
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
