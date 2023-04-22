import exercisesModel from "./exercises-model.js";

export const findAllExercises = async () => exercisesModel.find();
export const createExercise = (exercise) => exercisesModel.create(exercise);

export const findExerciseById = async (id) => exercisesModel.findById(id);
