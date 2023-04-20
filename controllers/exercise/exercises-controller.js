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
  app.get("/api/exercises", findAllExercises);
  app.post("/api/exercises", createExercise);
};
export default ExercisesController;
