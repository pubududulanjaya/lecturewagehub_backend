var userService = require('./lectureService');


var lecturegetDataConntrollerfn = async (req, res) =>
{
    var user = await userService.getDataFromDBService();
    res.send({ "status": true, "data": user });
}


var lecturecreateUserControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
var updatelectureUserControllerFn = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateUserDBService(req.params.id,req.body);
     if (result) {
        res.send({ "status": true, "message": "User Updateeeedddddd"} );
     } else {
         res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
     }
}



module.exports = {lecturecreateUserControllerFn,lecturegetDataConntrollerfn,updatelectureUserControllerFn};