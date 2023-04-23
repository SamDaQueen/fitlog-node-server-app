import mongoose from "mongoose";
import activitiesSchema from "./activities-schema.js";

const activitiesModel = mongoose.model("activities", activitiesSchema);

export default activitiesModel;