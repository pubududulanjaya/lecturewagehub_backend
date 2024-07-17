const Attendance = require('./AttendanceModel');

exports.saveAttendance = async (req, res) => {
  try {
    const attendanceData = req.body;
    const attendance = await Attendance.create(attendanceData);
    res.status(201).json({ success: true, data: attendance });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.status(200).json({ success: true, data: attendance });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const attendanceData = req.body;
    const updatedAttendance = await Attendance.findByIdAndUpdate(id, attendanceData, { new: true });
    res.status(200).json({ success: true, data: updatedAttendance });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteAttendance = async (req, res) => {
  try {
    const { _id } = req.params;
    await Attendance.findByIdAndDelete(_id);
    res.status(204).json({ success: true, data: null });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
