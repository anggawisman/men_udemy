const fs = require('fs');

const express = require('express');

const app = express();

// middleware
app.use(express.json());

// app.get('/', (req, res) => {
//     //res.status(200).send('server side'); // the diference between .send (will will check the structure of your output and set header information accordingly. ) and .end (will not set it up so we should set it manually)

//     res.status(200).json({message: 'server side', app: 'Natours', }); // .json method can auto set content-type to application/json
// })

// app.post('/', (req, res) => {

//     res.send('You can post to this endpoint...')
// })

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'successssss',
    results: tours.length,
    data: {
      tours: tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1; // this is to convert string to a number
  const tour = tours.find((el) => el.id === id);

  //   if (id > tours.length) {
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'successssss',
    // results: tours.length,
    data: {
      tour,
    },
  });
  //   reqId = req.params.id;

  //   res.status(200).json({
  //     status: 'successssss',
  //     // results: tours.length,
  //     data: {
  //       tours: tours[reqId],
  //     },
  //   });
});

app.post('/api/v1/tours', (req, res) => {
  // should have req and res
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );

  // res.send('Done')
});

app.patch('/api/v1/tours/:id', (req, res) => {
  if (req.params.id * 1 > tours.length) {
    //   if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>',
    },
  });
});

app.delete('/api/v1/tours/:id', (req, res) => {
  if (req.params.id * 1 > tours.length) {
    //   if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
