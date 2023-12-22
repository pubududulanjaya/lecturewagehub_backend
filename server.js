// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Lecturewagehub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('DB Connected!');
  })
  .catch((error) => {
    console.log('Error:', error);
  });

// Define a simple user model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserModel = mongoose.model('User', UserSchema);

app.use(cors());
app.use(bodyParser.json());
app.use(routes);



// Add your login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  UserModel.findOne({ username, password }, (err, user) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

    if (user) {
      res.json({ success: true, message: 'Login successful', usertype: user.usertype });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
