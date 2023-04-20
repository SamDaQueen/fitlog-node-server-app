import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    userId: String,
    exerciseId: Number,
  },
  { collection: "plan" }
);
export default planSchema;
