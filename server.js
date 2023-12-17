var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect("mongodb://127.0.0.1:27017/Lecturewagehub").then(() => {
    console.log("DB Connectedddd!!!!!!!!!!!");
}).catch((error) => {
    console.log("errorr", error);
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, function check(error) {
    if (error) {
        console.log("errorr");
    } else {
        console.log("startedddddd");
    }
});
