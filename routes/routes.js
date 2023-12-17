var express = require('express');

const router = express.Router();

var userController = require('../src/user/userController');

router.route('/user/getAll').get(userController.getDataConntrollerfn);

router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/update/:id').patch(userController.updateUserController);

router.route('/user/delete/:id').delete(userController.deleteUserController);

module.exports = router; 



var hoduserController = require('../src/user/hod/hoduserController');



router.route('/hoduser/create').post(hoduserController.hodcreateUserControllerFn);


module.exports = router; 


var lectureController = require('../src/user/lecture/lectureController');



router.route('/lectureDetails/create').post(lectureController.lecturecreateUserControllerFn);
router.route('/lectureDetails/getAll').get(lectureController.lecturegetDataConntrollerfn);
router.route('/lectureDetails/update/:LecturerName').patch(lectureController.updatelectureUserControllerFn);
module.exports = router;
//batch
var batchController = require('../src/user/batch/batchController');
router.route('/batch/create').post(batchController.batchcreateUserControllerFn);

module.exports = router; 

//module
const moduleController = require('../src/user/module/moduleController');

router.route('/module/create').post(moduleController.modulecreateUserControllerFn);
router.route('/module/getAll').get(moduleController.modulegetDataConntrollerfn);

module.exports = router;
//other payments
var paymentController = require('../src/user/payment/paymentController');
router.route('/payment/create').post(paymentController.paymentcreateUserControllerFn);

module.exports = router; 

//addfaculty
var facultyController = require('../src/user/faculty/facultyController');
router.route('/faculty/create').post(facultyController.facultycreateUserControllerFn);
router.route('/faculty/getAll').get(facultyController.facultygetDataConntrollerfn);
module.exports = router;



//addfaculty
var facultyController = require('../src/user/faculty/facultyController');
router.route('/faculty/create').post(facultyController.facultycreateUserControllerFn);
router.route('/faculty/getAll').get(facultyController.facultygetDataConntrollerfn);
module.exports = router;