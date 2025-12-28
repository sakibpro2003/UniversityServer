import { studentServices } from "./student.service.js";
const createStudent = async (req, res) => {
    console.log(req.body, "nody");
    try {
        const student = req.body;
        console.log(student, "data");
        const result = await studentServices.createStudentIntoDB(student);
        res.status(200).json({
            success: true,
            message: "Student created",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
};
// console.log(student)
export const studentControllers = {
    createStudent,
};
//# sourceMappingURL=student.controller.js.map