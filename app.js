import cors from "cors";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import ActivitiesController from "./controllers/activities/activities-controller.js";
import ExercisesController from "./controllers/exercise/exercises-controller.js";
import PlanController from "./controllers/plan/plan-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import SessionController from "./controllers/session-controller.js";
import TrainersController from "./controllers/trainers/trainers-controller.js";
import UsersController from "./controllers/users/users-controller.js";

const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://main--sweet-sopapillas-1c3774.netlify.app"
];

app.use(cors(
  {
    origin: allowedOrigins,
    credentials: true,
  }
));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // true on remote server, false on local
  })
);

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/fitlog";

mongoose.connect(CONNECTION_STRING);

ExercisesController(app);
UsersController(app);
SessionController(app);
PlanController(app);
ReviewsController(app);
ActivitiesController(app);
TrainersController(app);

app.listen(process.env.POST || 4000);
