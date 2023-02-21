const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

//Routes
const router = express.Router();

// router.param('id', tourController.checkID)

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);
router
  .route('/')
  .get(authController.portect, tourController.getAllTours)
  .post(tourController.createNewTours); // in the left middleware will run first

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.portect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour
  );

// POST /tour/4314fws/reviews
// NESTED ROUTE
router
  .route('/:tourId/reviews')
  .post(
    authController.portect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

module.exports = router;
