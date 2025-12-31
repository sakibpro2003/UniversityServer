import type { Request, Response } from "express";
import { StudentModel } from "./student.model.js";
import type { Student } from "./student.interface.js";



const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (_id: string) => {
  const result = await StudentModel.findById({ _id });
  return result;
};

export const studentServices = {

  getAllStudentsFromDB,getSingleStudentFromDB
};
