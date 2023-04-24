import trainersModel from "./trainers-model.js";

export const findAllUsersByTrainerId = async (trainerId) =>
  trainersModel.find({ trainerId }).populate({
    path: "userId",
    model: "users",
  });

export const findTrainerByUserId = async (userId) =>
  trainersModel.findOne({ userId }).populate({
    path: "trainerId",
    model: "users",
  });

export const createTrainerUser = async (trainerUser) =>
  trainersModel.create(trainerUser);

export const deleteTrainerUser = async (id) =>
  trainersModel.deleteOne({ _id: id });

export const deleteTrainerUserByUserId = async (userId) =>
  trainersModel.deleteMany({ userId });

export const deleteTrainerUserByTrainerId = async (trainerId) =>
  trainersModel.deleteOne({ trainerId });

export const updateTrainerForUser = async (userId, trainerId) =>
  trainersModel.updateOne({ userId }, { trainerId });
