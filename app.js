import express from "express";
import cors from "cors";
import ExercisesController from "./controllers/exercise/exercises-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import mongoose from "mongoose";

// const CONNECTION_STRING =
//   process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/fitlog";

const CONNECTION_STRING =
  "mongodb+srv://fitlog-username:fitlog-password@fitlog.tx1t84a.mongodb.net/Fitlog?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_STRING);

console.log("DB_CONNECTION_STRING: " + CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors());

ExercisesController(app);
UsersController(app);

app.listen(process.env.POST || 4000);
