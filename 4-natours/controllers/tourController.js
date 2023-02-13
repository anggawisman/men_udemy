const Tour = require(`./../models/tourModel`);


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
  