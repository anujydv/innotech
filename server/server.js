const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
var bodyParser = require('body-parser');
const {
    generateMessage,
    generateLocationMessage
} = require('./utils/message');
const {
    isRealString
} = require('./utils/validation');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO.listen(server);
var routes = require('../routes/routes.js');

app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static(path.join(__dirname, '../views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

// var port = 3000 || process.env.PORT;
server.listen(port, function() {
    console.log("Server running at port " + port);
});
