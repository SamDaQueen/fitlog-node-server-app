import mongoose from "mongoose";
const exercisesSchema = new mongoose.Schema(
  {
    name: String,
    exerciseId: Number,
  },
  { collection: "exercises" }
);
export default exercisesSchema;
