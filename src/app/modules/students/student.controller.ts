import type { NextFunction, Request, RequestHandler, Response } from "express";
import { studentServices } from "./student.service.js";

const getAllStudents: RequestHandler = async (req, res, next) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Student retrieved successfully",
      data: result,
    });
  } catch (error) {
    next();
  }
};

const getSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.studentID as string;
    const result = await studentServices.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: "Student is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const studentControllers = {
  getAllStudents,
  getSingleStudent,
};
