import planModel from "./plan-model.js";

export const addToPlan = async (userId, exerciseId) => {
  return planModel.create({ userId, exerciseId });
};

export const findPlan = async (userId, exerciseId) => {
  return planModel.findOne({ userId, exerciseId });
};

export const findPlansByUserId = async (userId) => {
  return planModel.find({ userId });
};

export const deleteFromPlan = async (userId, exerciseId) => {
  return planModel.deleteOne({ userId, exerciseId });
};
