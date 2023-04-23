import * as dao from "./activities-dao.js";

const ActivitiesController = (app) => {
  const createActivity = async (req, res) => {
    const activity = req.body;
    const newActivity = await dao.createActivity(activity);
    res.json(newActivity);
  };

  const findAllActivities = async (req, res) => {
    const activities = await dao.findAllActivities();
    res.json(activities);
  };

  const findActivitiesByUsername = async (req, res) => {
    const username = req.params["username"];
    const activities = await dao.findActivitiesByUsername(username);
    res.json(activities);
  };

  const deleteActivity = async (req, res) => {
    const activityId = req.params["aid"];
    const activity = await dao.deleteActivity(activityId);
    res.json(activity);
  };

  app.post("/api/activities", createActivity);
  app.get("/api/activities", findAllActivities);
  app.get("/api/users/:username/activities/", findActivitiesByUsername);
  app.delete("/api/activities/:aid", deleteActivity);
};
export default ActivitiesController;
