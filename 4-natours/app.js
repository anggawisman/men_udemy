const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

console.log(process.env.NODE_ENV);

// 1) MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`)); // to specify or serve static file from the folder not the route

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);

  next();
});

// 2) ROUTE HANDLERS/CONTROLLERS is divide it to controllers folder

// 3) ROUTES is divide it to routes folder
app.use('/api/v1/tours', tourRouter); // parent route
app.use('/api/v1/users', userRouter); // parent route, it's also called mounting a new router

// HANDLE UNHANDLE ROUTE makesure this route on bot of others route
app.all('*', (req, res, next) => {
  // "*" means anything

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Operational Error Handling Middleware with Express
app.use(globalErrorHandler);

module.exports = app;

// 4) START SERVER is divide to server.js
