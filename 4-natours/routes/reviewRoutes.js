const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

//Routes
const router = express.Router({ mergeParams: true }); //

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.portect,
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .delete(reviewController.deleteReview)
  .patch(reviewController.updateReview);

module.exports = router;
