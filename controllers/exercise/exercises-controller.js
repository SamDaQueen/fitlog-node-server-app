import * as dao from "./exercises-dao.js";

const ExercisesController = (app) => {
  const findAllExercises = async (req, res) => {
    const exercises = await dao.findAllExercises();
    res.json(exercises);
  };
  const createExercise = async (req, res) => {
    const exercise = req.body;
    const foundExercise = await dao.findExerciseById(exercise._id);
    if (!foundExercise) {
      const result = await dao.createExercise(exercise);
      res.json(result);
    } else {
      res.json(foundExercise);
    }
  };
  const findExerciseById = async (req, res) => {
    const id = req.params["eid"];
    const exercise = await dao.findExerciseById(id);
    res.json(exercise);
  };
  app.get("/api/exercises", findAllExercises);
  app.post("/api/exercises", createExercise);
  app.get("/api/exercises/:eid", findExerciseById);
};
export default ExercisesController;
