const Review = require(`../models/reviewModel`);
const APIFeatures = require('../utils/apiFeatures');
// const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  // console.log(req.query);

  // EXECUTE QUERY
  const features = new APIFeatures(Review.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .pagination();
  const reviews = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews: reviews,
    },
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  // ALLOW NESTED ROUTES
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  const newReview = await Review.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
});
