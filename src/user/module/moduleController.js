const moduleService = require('./moduleService');

const modulegetDataConntrollerfn = async (req, res) => {
    try {
        const user = await moduleService.getDataFromDBService();
        res.send({ "status": true, "data": user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
}

const modulecreateUserControllerFn = async (req, res) => {
    try {
        const status = await moduleService.createUserDBService(req.body);
        res.send({ "status": true, "message": "Module created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": false, "message": "Error creating Module" });
    }
}

module.exports = { modulecreateUserControllerFn, modulegetDataConntrollerfn };
