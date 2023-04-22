import planModel from "./plan-model.js";

export const addToPlan = async (userId, exerciseId) => {
  return planModel.create({ userId, exerciseId });
};

export const findPlan = async (userId, exerciseId) => {
  return planModel.findOne({ userId, exerciseId });
};

export const findPlanByUserId = async (userId) => {
  return await planModel
    .find({ userId })
    .populate({ path: "exerciseId", model: "exercises" })
    .exec();
};

export const deleteFromPlan = async (userId, exerciseId) => {
  return planModel.deleteOne({ userId, exerciseId });
};
