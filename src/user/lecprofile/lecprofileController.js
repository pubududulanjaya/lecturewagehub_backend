var userService = require('./lecprofileService');

var lecprofilecreateUserControllerFn = async (req, res) => {
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Lecturer details saved successfully" });
    } else {
        res.send({ "status": false, "message": "Error saving lecturer details" });
    }
}

var lecprofilegetUserControllerFn = async (req, res) =>
    {
        var user = await userService.getDataFromDBService();
        res.send({ "status": true, "data": user });
    }

const lecprofileUpdateUserControllerFn = async (req, res) => {
    try {
        const id = req.params.id;
        const userDetails = req.body;

        const updatedLecprofile = await userService.updateUserDBService(id, userDetails);
        
        // Update payment status
        await userService.updatePaymentStatus(id, userDetails.pay_status); // Assuming pay_status is present in userDetails
        
        res.send({ "status": true, "message": "Lecturer profile updated successfully", "data": updatedLecprofile });
    } catch (error) {
        res.status(500).send({ "status": false, "message": "Error updating lecturer profile" });
    }
};

module.exports = { lecprofilecreateUserControllerFn,lecprofilegetUserControllerFn, lecprofileUpdateUserControllerFn };
