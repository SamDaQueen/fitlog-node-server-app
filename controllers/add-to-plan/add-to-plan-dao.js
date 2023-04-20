import addToPlanModel from "./add-to-plan-model.js";

export const addToPlan = async (userId, exerciseId) => {
  return addToPlanModel.create({ userId, exerciseId });
};

export const findPlan = async (userId, exerciseId) => {
  return addToPlanModel.findOne({ userId, exerciseId });
};
