// router.js

const express = require('express');
const router = express.Router();

const loginController = require('../src/user/login/loginController');
router.route('/login').post(loginController.loginUserControllerFn);

const userController = require('../src/user/userController');
router.route('/user/getAll').get(userController.getDataConntrollerfn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/update/:id').patch(userController.updateUserController);
router.route('/user/delete/:id').delete(userController.deleteUserController);

const hoduserController = require('../src/user/hod/hoduserController');
router.route('/hoduser/create').post(hoduserController.hodcreateUserControllerFn);

const lectureController = require('../src/user/lecture/lectureController');
router.route('/lectureDetails/create').post(lectureController.lecturecreateUserControllerFn);
router.route('/lectureDetails/getAll').get(lectureController.lecturegetDataConntrollerfn);
router.route('/lectureDetails/update/:LecturerName').patch(lectureController.updatelectureUserControllerFn);

const batchController = require('../src/user/batch/batchController');
router.route('/batch/create').post(batchController.batchcreateUserControllerFn);

const moduleController = require('../src/user/module/moduleController');
router.route('/module/create').post(moduleController.modulecreateUserControllerFn);
router.route('/module/getAll').get(moduleController.modulegetDataConntrollerfn);

const paymentController = require('../src/user/payment/paymentController');
router.route('/payment/create').post(paymentController.paymentcreateUserControllerFn);

const facultyController = require('../src/user/faculty/facultyController');
router.route('/faculty/create').post(facultyController.facultycreateUserControllerFn);
router.route('/faculty/getAll').get(facultyController.facultygetDataConntrollerfn);
router.route('/faculty/update/:id').patch(facultyController.facultyUpdateUserControllerFn);

module.exports = router;
