const express = require('express');

const tourController = require('./../controllers/tourController')
// const {getAllTours, getTour, createNewTours, updateTour, deleteTour} = require('./../controllers/tourController')

//Routes 
const router = express.Router();

router.param('id', tourController.checkID)
// const middleware = router.param('body', tourController.checkBody)

// Create a checkBody middleware
// Check if body contains the name and price property
// If not, sendback 400 (bad request)
// Add it to the post handler stack

router.route('/')
    .get(tourController.getAllTours)
    .post( tourController.checkBody, tourController.createNewTours); // in the left middleware will run first

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createNewTours);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);


module.exports = router;