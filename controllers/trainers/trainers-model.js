import mongoose from "mongoose";
import trainersSchema from "./trainers-schema.js";

const trainersModel = mongoose.model("trainerUser", trainersSchema);
export default trainersModel;
