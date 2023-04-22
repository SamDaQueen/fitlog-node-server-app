import * as dao from "./plan-dao.js";

const PlanController = (app) => {
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

  const findPlanByUserId = async (req, res) => {
    const userId = req.params["uid"];
    const plans = await dao.findPlanByUserId(userId);
    return res.json(plans.map((plan) => plan.exerciseId));
  };

  const deleteFromPlan = async (req, res) => {
    const userId = req.params["uid"];
    const exerciseId = req.params["eid"];
    const plan = await dao.deleteFromPlan(userId, exerciseId);
    res.json(plan);
  };

  app.post("/api/users/:uid/add/:eid", addToPlan);
  app.get("/api/users/:uid/add/:eid", findPlan);
  app.get("/api/users/:uid/plan", findPlanByUserId);
  app.delete("/api/users/:uid/add/:eid", deleteFromPlan);
};
export default PlanController;
