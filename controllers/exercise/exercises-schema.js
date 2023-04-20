import mongoose from "mongoose";

const exercisesSchema = new mongoose.Schema(
  {
    exerciseId: Number,
    name: String,
    category: String,
    image: String,
  },
  { collection: "exercises" }
);
export default exercisesSchema;
