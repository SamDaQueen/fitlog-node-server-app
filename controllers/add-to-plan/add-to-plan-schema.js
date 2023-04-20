import mongoose from "mongoose";

const addToPlanSchema = new mongoose.Schema(
  {
    userId: String,
    exerciseId: Number,
  },
  { collection: "plan" }
);
export default addToPlanSchema;
