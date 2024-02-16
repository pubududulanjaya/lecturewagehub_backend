const express = require('express');
const router = express.Router();

// Import controllers
const loginController = require('../src/user/login/loginController');
const userController = require('../src/user/userController');
const hoduserController = require('../src/user/hod/hoduserController');
const lectureController = require('../src/user/lecture/lectureController');
const batchController = require('../src/user/batch/batchController');
const moduleController = require('../src/user/module/moduleController');
const paymentController = require('../src/user/payment/paymentController');
const facultyController = require('../src/user/faculty/facultyController');

// User Routes
router.post('/login', loginController.loginUserControllerFn);
router.post('/login/save', loginController.saveLoginControllerFn);
router.get('/user/getAll', userController.getDataConntrollerfn);
router.post('/user/create', userController.createUserControllerFn);
router.patch('/user/update/:id', userController.updateUserController);
router.delete('/user/delete/:id', userController.deleteUserController);

// HOD User Routes
router.post('/hoduser/create', hoduserController.hodcreateUserControllerFn);

// Lecture Routes
router.route('/lectureDetails/create').post(lectureController.lecturecreateUserControllerFn);
router.route('/lectureDetails/getAll').get(lectureController.lecturegetDataConntrollerfn);
// router.route('/lectureDetails/update/:LecturerName').patch(lectureController.updatelectureUserControllerFn);
router.route('/lectureDetails/update/:id').patch(lectureController.updatelectureUserControllerFn);

module.exports = router;

// Batch Routes
router.post('/addBatch/create', batchController.batchcreateUserControllerFn);

// Module Routes
router.post('/module/create', moduleController.modulecreateUserControllerFn);
router.get('/module/getAll', moduleController.modulegetDataConntrollerfn);

// Payment Routes
router.post('/payment/create', paymentController.paymentcreateUserControllerFn);
router.get('/payment', paymentController.getPaymentsByLecturerNameControllerFn);

// Faculty Routes
router.post('/faculty/create', facultyController.facultycreateUserControllerFn);
router.get('/faculty/getAll', facultyController.facultygetDataConntrollerfn);
router.patch('/faculty/update/:id', facultyController.facultyUpdateUserControllerFn);

module.exports = router;
