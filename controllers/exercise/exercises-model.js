import exercisesSchema from "./exercises-schema.js";
import mongoose from "mongoose";

const exercisesModel = mongoose.model("exercises", exercisesSchema);
export default exercisesModel;
