var userModel = require('./hoduserModel');

module.exports.getDataFromDBService = () => {
    return userModel.find({}).exec();
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();

        userModelData.HodName = userDetails.HodName;
        userModelData.Faculty = userDetails.Faculty;
        userModelData.Department = userDetails.Department;
        userModelData.Email = userDetails.Email;
        userModelData.UserName = userDetails.UserName;
        userModelData.Password = userDetails.Password;
        userModelData.UserType = userDetails.UserType;

        userModelData.save()
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}



module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id, userDetails, { new: true }) // { new: true } returns the updated document
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.removeUserDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
