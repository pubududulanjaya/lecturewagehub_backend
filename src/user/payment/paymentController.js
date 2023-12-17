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


module.exports = { paymentcreateUserControllerFn, };