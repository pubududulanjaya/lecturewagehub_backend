const timetableService = require('./timetableService');

exports.timetableCreateControllerFn = async (req, res) => {
    try {
        await timetableService.createTimetableForLecturer(req.body);
        res.send({ "status": true, "message": "Timetable created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": false, "message": "Error creating Timetable" });
    }
};

exports.timetableGetDataByLecturerNameControllerFn = async (req, res) => {
    try {
        const LecturerName = req.query.LecturerName;
        const timetables = await timetableService.getTimetableDataByLecturerName(LecturerName);
        if (timetables.length > 0) {
            res.send({ "status": true, "data": timetables });
        } else {
            res.status(404).send({ "status": false, "message": "Timetable not found for the specified lecturer" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
};

exports.timetableGetDataControllerFn = async (req, res) => {
    try {
        const timetables = await timetableService.getDataFromDBService();
        res.send({ "status": true, "data": timetables });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
};

exports.updateTimetableControllerFn = async (req, res) => {
    try {
        const _id = req.params._id;
        const timetableDetails = req.body;
        const updatedTimetable = await timetableService.updateUserDBService(_id, timetableDetails);
        if (updatedTimetable) {
            res.send({ "status": true, "message": "Timetable updated successfully", "data": updatedTimetable });
        } else {
            res.status(404).send({ "status": false, "message": "Timetable not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
};
exports.deleteTimetableControllerFn = async (req, res) => {
    try {
        const _id = req.params._id;
        const deletedTimetable = await timetableService.deleteTimetableService(_id);
        if (deletedTimetable) {
            res.send({ "status": true, "message": "Timetable deleted successfully", "data": deletedTimetable });
        } else {
            res.status(404).send({ "status": false, "message": "Timetable not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
};