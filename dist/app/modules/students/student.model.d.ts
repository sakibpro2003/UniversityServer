import mongoose from "mongoose";
import type { Student } from "./student.interface.js";
export declare const StudentModel: mongoose.Model<Student, {}, {}, {}, mongoose.Document<unknown, {}, Student, {}, mongoose.DefaultSchemaOptions> & Student & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any, Student>;
//# sourceMappingURL=student.model.d.ts.map