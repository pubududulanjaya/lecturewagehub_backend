// loginController.js
const Login = require('./loginModel');





exports.loginUserControllerFn = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Login.findOne({ username, password });
    if (user) {
      res.json({ success: true, message: 'Login successful', usertype: user.usertype });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


