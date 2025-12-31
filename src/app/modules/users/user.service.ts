import type { TNewUser, TUser } from "./user.interface.js";
import { User } from "./user.model.js";

// Service layer for student persistence.
const createStudentIntoDB = async (userData:TUser) => {

    // const user: TNewUser = { role: "" };

    userData.role = "student";
  const newUser = await User.create(userData);
  if(Object.keys(newUser).length){
    stud
  }
  return result;
};

export const userServices = {
  createStudentIntoDB,
};
