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
const timetableController = require('../src/user/timetable/timetableController');
const lecprofileController = require('../src/user/lecprofile/lecprofileController');
const AttendanceController = require('../src/user/Attendance/AttendanceController');
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
router.post('/lectureDetails/create', lectureController.lecturecreateUserControllerFn);
router.get('/lectureDetails/getAll', lectureController.lecturegetDataConntrollerfn);
router.patch('/lectureDetails/update/:id', lectureController.updatelectureUserControllerFn);

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

// Timetable Routes
router.post('/timetable/create', timetableController.timetableCreateControllerFn);
router.get('/timetable/getAll', timetableController.timetableGetDataControllerFn);
router.get('/timetable', timetableController.timetableGetDataByLecturerNameControllerFn);
router.patch('/timetable/update/:_id', timetableController.updateTimetableControllerFn);
router.delete('/timetable/delete/:_id', timetableController.deleteTimetableControllerFn);

// Lecprofile Routes
router.post('/lecprofile/create', lecprofileController.lecprofilecreateUserControllerFn);
router.patch('/lecprofile/update/:id', lecprofileController.lecprofileUpdateUserControllerFn);
// router.get('/lecprofiles', lecprofileController.lecprofileGetUserControllerFn);
router.get('/lecprofile/getAll', lecprofileController.lecprofilegetUserControllerFn);


// Save attendance
router.post('/attendance/save', AttendanceController.saveAttendance);

// Get all attendance
router.get('/attendance', AttendanceController.getAllAttendance);

// Update attendance
router.put('/attendance/update/:id', AttendanceController.updateAttendance);

// Delete attendance
router.delete('/attendance/delete/:_id', AttendanceController.deleteAttendance);


module.exports = router;
