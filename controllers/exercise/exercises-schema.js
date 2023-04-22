import mongoose from "mongoose";

const exercisesSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    name: String,
    category: String,
    image: String,
  },
  { collection: "exercises" }
);
export default exercisesSchema;
