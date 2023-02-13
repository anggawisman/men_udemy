// Well, in this case we do not only have one export, so we're not gonna use module.exports, but instead we will put all of these functions on the exports object.

const Tour = require(`../models/tourModel`);
const fs = require('fs');

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json` )
//   );


// middleware checkBody
exports.checkBody = (req, res, next) => {
  console.log(`Tour body is: ${JSON.stringify(req.body)}`);

  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Name or Price not assign',
    });
  }
  next();
};


// middleware checkID
exports.checkID = (req, res, next, val) => { // in the param middleware actually we got access to fourth arguments that is a value of the param question 
  console.log(`Tour id is: ${val}`);

  if (req.params.id * 1 > tours.length) {
    //   if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

// Routes Handlers or Controller

exports.getAllTours = (req, res) => {
    console.log(req.requestTime);
    res.status(200).json({
      status: 'successssss',
      requestedAt: req.requestTime,
      // results: tours.length,
      // data: {
      //   tours: tours,
      // },
    });
  };
  
exports.getTour = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1; // this is to convert string to a number
    // const tour = tours.find((el) => el.id === id);

    // res.status(200).json({
    //   status: 'successssss',
    //   data: {
    //     tour,
    //   },
    // });
  };
  
exports.createNewTours = (req, res) => {
  res.status(201).json({
    status: 'success',
    // data: {
    //   tour: newTour,
    // },
  });

    // console.log(req.body.name)

    // const newId = tours[tours.length - 1].id + 1;
    // const newTour = Object.assign({ id: newId }, req.body);
  
    // tours.push(newTour);
  
    // fs.writeFile(
    //   `${__dirname}/../dev-data/data/tours-simple.json`,
    //   JSON.stringify(tours),
    //   () => {
    //     res.status(201).json({
    //       status: 'success',
    //       data: {
    //         tour: newTour,
    //       },
    //     });
    //   }
    // );
  };
  
exports.updateTour = (req, res) => {
      
    res.status(200).json({
      status: 'success',
      data: {
        tour: '<Updated tour here>',
      },
    });
  };
  
exports.deleteTour = (req, res) => {
    res.status(204).json({
      status: 'success',
      data: null,
    });
  };
  