var userModel = require('./lectureModel');

module.exports.getDataFromDBService = () => {
    return userModel.find({}).exec();
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();
        
         
        userModelData.lecturerId = userDetails.lecturerId;
        userModelData.LecturerName = userDetails.LecturerName;
        userModelData.Title = userDetails.Title;
        userModelData.MobileNumber = userDetails.MobileNumber;
        userModelData.NIC = userDetails.NIC;
        userModelData.AddressLine1 = userDetails.AddressLine1;
        userModelData.AddressLine2 = userDetails.AddressLine2;
        userModelData.State = userDetails.State;
        userModelData.Email = userDetails.Email;
        userModelData.SalaryType = userDetails.SalaryType;
        userModelData.MonthlyPayment = userDetails.MonthlyPayment;
        userModelData.RatePerHour = userDetails.RatePerHour;
        userModelData.AccountName = userDetails.AccountName;
        userModelData.AccountNumber = userDetails.AccountNumber;
        userModelData.BankName = userDetails.BankName;
        userModelData.bankCode = userDetails.bankCode;
        userModelData.BranchName = userDetails.BranchName;
        userModelData.BranchCode = userDetails.BranchCode;
        userModelData.cv = userDetails.cv;
        userModelData.profilePicture = userDetails.profilePicture;

        userModelData.save()
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                if (error.name === 'ValidationError') {
                    reject({ validationError: true, message: error.message });
                } else {
                    reject(error);
                }
            });
    });
}



module.exports.updateUserDBService = (Id, userDetails) => {
    return new Promise((resolve, reject) => {
        userModel.findByIdAndUpdate(Id, userDetails, { new: true })
            .then(result => {
                if (result) {
                    resolve(result);
                } else {
                    reject({ notFound: true, message: "User not found" });
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.removeUserDBService = (lecturerId) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(lecturerId)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
