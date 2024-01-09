var userService = require('./lectureService');

var lecturegetDataConntrollerfn = async (req, res) => {
    try {
        var user = await userService.getDataFromDBService();
        res.send({ "status": true, "data": user });
    } catch (error) {
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
}

var lecturecreateUserControllerFn = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        var status = await userService.createUserDBService(req.body);
        res.send({ "status": true, "message": "User created successfully" });
    } catch (error) {
        if (error.validationError) {
            res.status(400).send({ "status": false, "message": error.message });
        } else {
            res.status(500).send({ "status": false, "message": "Internal Server Error" });
        }
    }
}

var updatelectureUserControllerFn = async (req, res) => {
    try {
        var result = await userService.updateUserDBService(req.params.id, req.body);
        res.send({ "status": true, "message": "User Updated" });
    } catch (error) {
        if (error.notFound) {
            res.status(404).send({ "status": false, "message": "User not found" });
        } else {
            res.status(500).send({ "status": false, "message": "Internal Server Error" });
        }
    }
}

module.exports = { lecturecreateUserControllerFn, lecturegetDataConntrollerfn, updatelectureUserControllerFn };
