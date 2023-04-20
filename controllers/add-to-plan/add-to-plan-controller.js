import * as dao from "./add-to-plan-dao.js";

const AddToPlanController = (app) => {
  const addToPlan = async (req, res) => {
    const userId = req.params["uid"];
    const exerciseId = req.params["eid"];
    const plan = await dao.addToPlan(userId, exerciseId);
    res.json(plan);
  };

  const findPlan = async (req, res) => {
    const userId = req.params["uid"];
    const exerciseId = req.params["eid"];
    const plan = await dao.findPlan(userId, exerciseId);
    res.json(plan);
  };

  const findPlansByUserId = async (req, res) => {
    const userId = req.params["uid"];
    const plans = await dao.findPlansByUserId(userId);
    res.json(plans);
  };

  app.post("/api/users/:uid/add/:eid", addToPlan);
  app.get("/api/users/:uid/add/:eid", findPlan);
  app.get("/api/users/:uid/plan", findPlansByUserId);
};
export default AddToPlanController;
