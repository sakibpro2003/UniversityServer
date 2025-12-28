import type { Student } from "./student.interface.js";
export declare const studentServices: {
    createStudentIntoDB: (student: Student) => Promise<import("mongoose").Document<unknown, {}, Student, {}, import("mongoose").DefaultSchemaOptions> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=student.service.d.ts.map