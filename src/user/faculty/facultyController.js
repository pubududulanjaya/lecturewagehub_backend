const userService = require('./facultyService');

const facultygetDataConntrollerfn = async (req, res) => {
    try {
        const faculties = await userService.getDataFromDBService();
        res.send({ "status": true, "data": faculties });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
}

const facultycreateUserControllerFn = async (req, res) => {
    try {
        const status = await userService.createUserDBService(req.body);
        res.send({ "status": true, "message": "Faculty created successfully" });
    } catch (error) {
        res.status(500).send({ "status": false, "message": "Error creating Faculty" });
    }
}

const facultyUpdateUserControllerFn = async (req, res) => {
    try {
        const id = req.params.id;
        const userDetails = req.body;

        const updatedFaculty = await userService.updateUserDBService(id, userDetails);
        
        res.send({ "status": true, "message": "Faculty updated successfully", "data": updatedFaculty });
    } catch (error) {
        res.status(500).send({ "status": false, "message": "Error updating Faculty" });
    }
}

module.exports = { facultycreateUserControllerFn, facultygetDataConntrollerfn, facultyUpdateUserControllerFn };