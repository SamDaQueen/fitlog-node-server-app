import reviewsModel from "./reviews-model.js";

export const createReview = async (review) => {
  return reviewsModel.create(review);
};

export const findReviewsByExerciseId = async (exerciseId) => {
  return reviewsModel.find({ exerciseId });
};

export const findReviewsByUsername = async (username) => {
  return reviewsModel
    .find({ username })
    .populate({
      path: "exerciseId",
      model: "exercises",
      select: "name",
    })
    .exec();
};

export const deleteReview = async (reviewId) => {
  return reviewsModel.deleteOne({ _id: reviewId });
};
