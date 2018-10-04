const path = require('path');
const http = require('http');
var moment = require('moment');
const express = require('express');
const socketIO = require('socket.io');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
const { generateMessage, generateLocationMessage } = require('./utils/message');
const { isRealString } = require('./utils/validation');
const {Chat} = require('./model/chat');
var routes = require('../routes/routes.js');

mongoose.connect("mongodb://localhost/rescue");

var app = express();
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);
var server = http.createServer(app);
var io = socketIO.listen(server);
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
const map = require('./model/maplocation');
app.set('views', path.join(__dirname, '../views'));
app.use('/', routes);
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Help Team', 'Message your location or drop message we help you'));

    socket.broadcast.emit('newMessage', generateMessage('Help Team', 'New User Connected'));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        var msg = generateMessage(message.from, message.text);
        var chat = new Chat({
            username:msg.from,
            message:msg.text,
            time: moment(msg.time).format('h:mm a')
        });
        chat.save();
        io.emit('newMessage', msg);
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Help-Seeker', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

/*** map.create([{
"lat": 68.2,
"camp": "Anant Flood Relief",
"lon": 48.3,
"pincode": 225548,
"area": "Sikkim"
}, {
    "lat": 48.3,
    "camp": "Pro Noobs Relief Camp",
    "lon": 68.2,
    "pincode": 225548,
    "area": "Kerala"
}, {
    "lat": 48.3,
    "camp": "Relief Camp Flood",
    "lon": 78.6,
    "pincode": 201206,
    "area": "Delhi"
}, {
    "lat": 48.3,
    "camp": "Anant Flood Relief",
    "lon": 48.3,
    "pincode": 201278,
    "area": "Kadernath"
}, {
    "lat": 28.9,
    "camp": "Nooby Devs Camp for Relief",
    "lon": 48.3,
    "pincode": 201278,
    "area": "Chennai"
}, {
    "lat": 42.1,
    "camp": "Atom Services Relief Yogana",
    "lon": 58.3,
    "pincode": 201206,
    "area": "Kerala"
}, {
    "lat": 78.6,
    "camp": "Anant Flood Relief",
    "lon": 78.6,
    "pincode": 201206,
    "area": "Sikkim"
}, {
    "lat": 58.3,
    "camp": "Anant Flood Relief",
    "lon": 28.9,
    "pincode": 201206,
    "area": "Kerala"
}, {
    "lat": 48.3,
    "camp": "Nooby Devs Camp for Relief",
    "lon": 78.6,
    "pincode": 201206,
    "area": "Kadernath"
}, {
    "lat": 48.3,
    "camp": "Pro Noobs Relief Camp",
    "lon": 62.2,
    "pincode": 247001,
    "area": "Kadernath"
}, {
    "lat": 68.2,
    "camp": "Nooby Devs Camp for Relief",
    "lon": 58.3,
    "pincode": 201278,
    "area": "Kadernath"
}]);
**/


const port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log("Server running at port " + port);
});