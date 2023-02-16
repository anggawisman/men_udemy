const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// SIGNUP
router.post('/signup', authController.signUp);
router.post('/login', authController.login);

// REST FORMAT because possibility of a system administrator updating, deleting, getting all the users based on their ID.
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
