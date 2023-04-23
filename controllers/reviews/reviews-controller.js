import * as dao from "./reviews-dao.js";

const ReviewsController = (app) => {
  const createReview = async (req, res) => {
    const review = req.body;
    const newReview = await dao.createReview(review);
    res.json(newReview);
  };

  const findReviewsByExerciseId = async (req, res) => {
    const exerciseId = req.params["eid"];
    const reviews = await dao.findReviewsByExerciseId(exerciseId);
    res.json(reviews);
  };

  const findReviewsByUsername = async (req, res) => {
    const username = req.params["username"];
    const reviews = await dao.findReviewsByUsername(username);
    res.json(reviews);
  };

  const deleteReview = async (req, res) => {
    const reviewId = req.params["rid"];
    const review = await dao.deleteReview(reviewId);
    res.json(review);
  };

  app.post("/api/exercises/reviews", createReview);
  app.get("/api/exercises/reviews/:eid", findReviewsByExerciseId);
  app.get("/api/users/:username/reviews/", findReviewsByUsername);
  app.delete("/api/exercises/reviews/:rid", deleteReview);
};
export default ReviewsController;
