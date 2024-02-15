var userService = require('./paymentService');



var paymentcreateUserControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Payments created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating Payments" });
    }
}

var getPaymentsByLecturerNameControllerFn = async (req, res) => {
    var LecturerName = req.query.LecturerName;
    var payments = await userService.getPaymentsByLecturerNameService(LecturerName);

    if (payments) {
        res.send(payments);
    } else {
        res.status(404).send({ "status": false, "message": "Payments not found" });
    }
}
module.exports = { paymentcreateUserControllerFn,getPaymentsByLecturerNameControllerFn };