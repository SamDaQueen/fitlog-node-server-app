import planModel from "./plan-model.js";

export const addToPlan = async (userId, exerciseId) => {
  return planModel.create({ userId, exerciseId });
};

export const findPlan = async (userId, exerciseId) => {
  return planModel.findOne({ userId, exerciseId });
};

export const findExercisesByUserId = async (userId) => {
  return await planModel
    .find({ userId })
    .populate({
      path: "exerciseId",
      model: "exercises",
      select: "name category image",
    })
    .exec();
};

export const findUsersByExerciseId = async (exerciseId) => {
  return await planModel
    .find({ exerciseId })
    .populate({
      path: "userId",
      model: "users",
      select: "username firstName lastName",
    })
    .exec();
};

export const deleteFromPlan = async (userId, exerciseId) => {
  return planModel.deleteOne({ userId, exerciseId });
};
