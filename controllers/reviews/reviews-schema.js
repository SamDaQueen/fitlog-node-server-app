import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  exerciseId: { type: Number, required: true },
  date: { type: Date, required: true },
});
export default reviewsSchema;
