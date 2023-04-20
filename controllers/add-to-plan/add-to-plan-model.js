import mongoose from "mongoose";
import addToPlanSchema from "./add-to-plan-schema.js";

const addToPlanModel = mongoose.model("plan", addToPlanSchema);
export default addToPlanModel;
