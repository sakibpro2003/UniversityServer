import type { Request, Response } from "express";
import { userServices } from "./user.service.js";
import type { TNewUser, TUser } from "./user.interface.js";

// HTTP handler for creating a student.
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

  

    const result = await userServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: "Student created",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userControllers = {
  createStudent,
};
