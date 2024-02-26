var timetableService = require('./timetableService');

var timetableCreateUserControllerFn = async (req, res) => {
    try {
        var status = await timetableService.createUserDBService(req.body);
        res.send({ "status": true, "message": "Timetable created successfully" });
    } catch (error) {
        console.error(error);
        res.send({ "status": false, "message": "Error creating Timetable" });
    }
}

const timetableGetDataControllerFn = async (req, res) => {
    try {
        const timetables = await timetableService.getDataFromDBService();
        res.send({ "status": true, "data": timetables });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
}

module.exports = { timetableCreateUserControllerFn, timetableGetDataControllerFn };