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
