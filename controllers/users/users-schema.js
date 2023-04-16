import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    birthdate: Date,
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN", "TRAINER", "SUBSCRIBER"],
    },
  },
  {
    collection: "users",
  }
);
export default usersSchema;
