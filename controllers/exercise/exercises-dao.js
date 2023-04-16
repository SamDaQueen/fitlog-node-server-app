import exercisesModel from "./exercises-model.js";

export const findAllExercises = async () => exercisesModel.find();
export const createExercise = (exercise) => exercisesModel.create(exercise);
