import activitiesModel from "./activities-model.js";

export const createActivity = async (activity) => {
  return activitiesModel.create(activity);
};

export const findAllActivities = async () => {
  return activitiesModel.find();
};

export const findActivitiesByUsername = async (username) => {
  return activitiesModel.find({ username });
};

export const deleteActivity = async (activityId) => {
  return activitiesModel.deleteOne({ _id: activityId });
};
