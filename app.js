import cors from "cors";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import ExercisesController from "./controllers/exercise/exercises-controller.js";
import PlanController from "./controllers/plan/plan-controller.js";
import SessionController from "./controllers/session-controller.js";
import UsersController from "./controllers/users/users-controller.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // true on remote server, false on local
  })
);

// const CONNECTION_STRING =
//   process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/fitlog";

const CONNECTION_STRING =
  "mongodb+srv://fitlog-username:fitlog-password@fitlog.tx1t84a.mongodb.net/Fitlog?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_STRING);

ExercisesController(app);
UsersController(app);
SessionController(app);
PlanController(app);

app.listen(process.env.POST || 4000);
