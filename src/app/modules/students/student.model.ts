import mongoose, { model } from "mongoose";
import type { Student } from "./student.interface.js";
import bcrypt from "bcrypt";
import config from "../../config/index.js";
const { Schema } = mongoose;

// Mongoose schema describing the Student document shape.
const studentSchema = new Schema(
  {
    id: { type: String },
    name: {
      firstname: { type: String, trim: true },
      lastName: { type: String, trim: true },
    },
    password: { type: String },
    email: { type: String },
    avatar: { type: String },
    contactNumber: { type: String },
    presentAddress: { type: String },
    parmanentAddress: { type: String },
    bloodGroup: { type: String, enum: ["A+", "B+", "O+"] },
    gender: { type: String, enum: ["male", "female"] },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


// mongoose middleware
// studentSchema.pre("save", function () {
//   console.log("pre save");
// });

// studentSchema.post("save", function () {
//   console.log("post save");
// });

// creates a new field from existing field data
studentSchema.virtual("fullName").get(function () {
  const first = this.name?.firstname;
  const last = this.name?.lastName;
  return `${first} ${last}`.trim();
});
studentSchema.pre("save", async function () {
  // const user = this;
  this.password = await bcrypt.hash(
    this.password!,
    Number(config.bcrypt_salt_round)
  );

  // next();
});

studentSchema.pre("save", async function () {
  this.password = await bcrypt.hash(
    this.password!,
    Number(config.bcrypt_salt_round)
  );
});

export const StudentModel = model<Student>("Student", studentSchema);
