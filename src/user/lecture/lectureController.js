const lectureService = require('./lectureService');

const lecturegetDataConntrollerfn = async (req, res) => {
    try {
        const lecturers = await lectureService.getDataFromDBService();
        res.send({ "status": true, "data": lecturers });
    } catch (error) {
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
}

const lecturecreateUserControllerFn = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const status = await lectureService.createLecturerDBService(req.body);
        res.send({ "status": true, "message": "Lecturer created successfully" });
    } catch (error) {
        if (error.validationError) {
            res.status(400).send({ "status": false, "message": error.message });
        } else {
            res.status(500).send({ "status": false, "message": "Internal Server Error" });
        }
    }
}

const updatelectureUserControllerFn = async (req, res) => {
    try {
        const result = await lectureService.updateLecturerDBService(req.params.id, req.body);
        res.send({ "status": true, "message": "Lecturer Updated" });
    } catch (error) {
        if (error.notFound) {
            res.status(404).send({ "status": false, "message": "Lecturer not found" });
        } else {
            res.status(500).send({ "status": false, "message": "Internal Server Error" });
        }
    }
}

const removeLecturerControllerFn = async (req, res) => {
    try {
        const result = await lectureService.removeLecturerDBService(req.params.id);
        res.send({ "status": true, "message": "Lecturer Removed" });
    } catch (error) {
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
}


const getLecturerByNameControllerFn = async (req, res) => {
    const lecturerName = req.params.name;
  
    try {
      const lecturer = await lectureService.getLecturerByNameService(lecturerName);
  
      if (lecturer) {
        res.status(200).json({ "status": true, "data": lecturer });
      } else {
        res.status(404).json({ "status": false, "message": "Lecturer not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ "status": false, "message": "Internal Server Error" });
    }
  };
  
  
  

module.exports = { 
    lecturecreateUserControllerFn, 
    lecturegetDataConntrollerfn, 
    updatelectureUserControllerFn,
    removeLecturerControllerFn,
    getLecturerByNameControllerFn,
    
  
};
