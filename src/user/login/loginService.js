// login.service.js

const express = require('express');
const router = express.Router();
const Login = require('../models/loginModel'); // Adjust the path based on your project structure

// Login Service - Save Login Information
router.post('/login/save', async (req, res) => {
  const { username, password, usertype,Department } = req.body;

  try {
    const login = new Login({
      username,
      password,
      usertype,
      Department,
    });

    await login.save();

    res.json({ success: true, message: 'Login information saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
