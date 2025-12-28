import { StudentModel } from "./student.model.js";
const createStudentIntoDB = async (student) => {
    const result = await StudentModel.create(student);
    return result;
};
export const studentServices = {
    createStudentIntoDB,
};
//# sourceMappingURL=student.service.js.map