import mongoose from "mongoose";

const trainersSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unicode: true },
    trainerId: { type: String, required: true },
  },
  { collection: "trainers" }
);
export default trainersSchema;
