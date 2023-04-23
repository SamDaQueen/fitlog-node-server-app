import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true },
    birthdate: { type: Date, required: true },
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN", "TRAINER"],
    },
  },
  {
    collection: "users",
  }
);
export default usersSchema;
