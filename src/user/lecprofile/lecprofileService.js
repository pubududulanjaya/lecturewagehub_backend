var lecprofileModel = require('./lecprofileModel');

module.exports.createUserDBService = (userDetails) => {
  return new Promise((resolve, reject) => {
    var userModelData = new lecprofileModel({
      LecturerName: userDetails.LecturerName,
      MonthlyPayment: userDetails.MonthlyPayment,
      RatePerHour: userDetails.RatePerHour,
      Department: userDetails.Department,
      TotalHours: userDetails.TotalHours,
      totalNetAmountPaid: userDetails.totalNetAmountPaid,
      selectedMonth: userDetails.selectedMonth,
      selectedYear: userDetails.selectedYear
    });

    userModelData.save()
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports.getDataFromDBService = () => {
  return lecprofileModel.find({}).exec();
}

exports.updateUserDBService = async (id, lecprofileDetails) => {
  try {
    return await lecprofileModel.findByIdAndUpdate(id, lecprofileDetails, { new: true });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.updatePaymentStatus = async (id, pay_status) => {
  try {
    return await lecprofileModel.findByIdAndUpdate(id, { pay_status }, { new: true });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
