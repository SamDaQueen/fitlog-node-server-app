import mongoose from "mongoose";
import planSchema from "./plan-schema.js";

const planModel = mongoose.model("plan", planSchema);
export default planModel;
