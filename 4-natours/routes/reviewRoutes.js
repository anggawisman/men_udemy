const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

//Routes
const router = express.Router();

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.portect,
    authController.restrictTo('user'),
    reviewController.createReview
  ); // in the left middleware will run first

module.exports = router;
