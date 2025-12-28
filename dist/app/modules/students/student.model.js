import mongoose, { model } from "mongoose";
const { Schema } = mongoose;
const studentSchema = new Schema({
    id: { type: String },
    name: {
        firstname: { type: String },
        lastName: { type: String },
    },
    email: { type: String },
    avatar: { type: String },
    contactNumber: { type: String },
    presentAddress: { type: String },
    parmanentAddress: { type: String },
    bloodGroup: { type: String, enum: ["A+", "B+", "O+"] },
    gender: { type: String, enum: ["male", "female"] },
});
export const StudentModel = model("Student", studentSchema);
//# sourceMappingURL=student.model.js.map