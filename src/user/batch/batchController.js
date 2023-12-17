var userService = require('./batchService');



var batchcreateUserControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Batch created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating Batch" });
    }
}


module.exports = { batchcreateUserControllerFn, };