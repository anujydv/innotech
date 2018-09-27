const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
var bodyParser = require('body-parser');
const { generateMessage,generateLocationMessage } = require('./utils/message');
const { isRealString } = require('./utils/validation');
var routes = require('../routes/routes.js');

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

app.use('/', routes);
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Help Team', 'Message your location or drop message we help you'));

    socket.broadcast.emit('newMessage', generateMessage('Help Team', 'New User Connected'));

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

const port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log("Server running at port " + port);
});
