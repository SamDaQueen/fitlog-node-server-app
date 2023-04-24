import * as dao from "./trainers-dao.js";

function TrainersController(app) {
  const findAllUsersByTrainerId = async (req, res) => {
    const trainerId = req.params.trainerId;
    const users = await dao.findAllUsersByTrainerId(trainerId);
    res.send(users.map((user) => user.userId));
  };

  const findTrainerByUserId = async (req, res) => {
    const userId = req.params.userId;
    const trainer = await dao.findTrainerByUserId(userId);
    res.send(trainer);
  };

  const createTrainerUser = async (req, res) => {
    const trainerUser = req.body;
    const foundTrainerUser = await dao.findTrainerByUserId(trainerUser.userId);
    if (!foundTrainerUser) {
      const createdTrainerUser = await dao.createTrainerUser(trainerUser);
      res.json(createdTrainerUser);
    } else {
      const updatedTrainerUser = await dao.updateTrainerForUser(
        trainerUser.userId,
        trainerUser.trainerId
      );
      res.json(updatedTrainerUser);
    }
  };

  const deleteTrainerUser = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteTrainerUser(id);
    res.json(status);
  };

  const deleteTrainerUserByUserId = async (req, res) => {
    const userId = req.params.userId;
    const status = await dao.deleteTrainerUserByUserId(userId);
    res.json(status);
  };

  const deleteTrainerUserByTrainerId = async (req, res) => {
    const trainerId = req.params.trainerId;
    const status = await dao.deleteTrainerUserByTrainerId(trainerId);
    res.json(status);
  };

  const updateTrainerForUser = async (req, res) => {
    const userId = req.params.userId;
    const trainerId = req.body.trainerId;
    const status = await dao.updateTrainerForUser(userId, trainerId);
    res.json(status);
  };

  app.get("/api/trainers/:trainerId", findAllUsersByTrainerId);
  app.get("/api/trainers/user/:userId", findTrainerByUserId);
  app.post("/api/trainers", createTrainerUser);
  app.delete("/api/trainers/:id", deleteTrainerUser);
  app.delete("/api/trainers/user/:userId", deleteTrainerUserByUserId);
  app.delete(
    "/api/trainer-user/trainer/:trainerId",
    deleteTrainerUserByTrainerId
  );
  app.put("/api/trainers/user/:userId", updateTrainerForUser);
}

export default TrainersController;
