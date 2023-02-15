const mongoose = require('mongoose');

// if there is not define in schema the data that pass here will be ignored

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: ['A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.0,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: {
    type: Number,
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a summary'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String], //means string in array,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, // to to exclude select field so this field would not be show
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

// const testTour = new Tour ({
//   name: 'The Park Camper',
//   price: 667
// });

// testTour.save().then(doc => { //untuk save document ke mongodb
//   console.log(doc);
// }).catch(err => {
//   console.log('ERROR: ',err)
// })

module.exports = Tour;
