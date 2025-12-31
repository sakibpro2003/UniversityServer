import mongoose from "mongoose";
import type { TUser } from "./user.interface.js";

const userSchema = new mongoose.Schema<TUser>(
  {
    id: { type: String },
    password: { type: String },
    role: { type: String, enum: ["student", "faculty", "admin"] },
    needPasswordChange: { type: Boolean },
    status: { type: String, enum: ["in-progress", "blocked"] },
    isDeleted: { type: Boolean },
  },
  { timestamps: true }
);
export const User = mongoose.model<TUser>("User", userSchema);
