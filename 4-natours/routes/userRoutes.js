const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { route } = require('./reviewRoutes');

const router = express.Router();

// SIGNUP
router.post('/signup', authController.signUp);
router.post('/login', authController.login);

// ABOUT PASSWORD
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch(
  '/updatePassword',
  authController.portect,
  authController.updatePassword
);

// UPDATE ME
router.patch('/updateMe', authController.portect, userController.updateMe);

router.delete('/deleteMe', authController.portect, userController.deleteMe);

router.get(
  '/me',
  authController.portect,
  userController.getMe,
  userController.getUser
);

// REST FORMAT because possibility of a system administrator updating, deleting, getting all the users based on their ID.
router.route('/').get(userController.getAllUsers);
// .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
