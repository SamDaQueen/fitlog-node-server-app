import * as dao from "./exercises-dao.js";

const ExercisesController = (app) => {
  const findAllExercises = async (req, res) => {
    const exercises = await dao.findAllExercises();
    res.json(exercises);
  };
  const createExercise = async (req, res) => {
    const exercise = req.body;
    const result = await dao.createExercise(exercise);
    res.json(result);
  };
  const findExerciseById = async (req, res) => {
    const exerciseId = req.params["eid"];
    const exercise = await dao.findExerciseById(exerciseId);
    res.json(exercise);
  };
  app.get("/api/exercises", findAllExercises);
  app.post("/api/exercises", createExercise);
  app.get("/api/exercises/:eid", findExerciseById);
};
export default ExercisesController;
