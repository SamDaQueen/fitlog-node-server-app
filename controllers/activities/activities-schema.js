import mongoose from "mongoose";

const activitiesSchema = new mongoose.Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, required: true },
});
export default activitiesSchema;
