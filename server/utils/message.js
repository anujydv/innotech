var moment = require('moment');
const Chat = require('../model/chat');

var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    };
};

var generateLocationMessage = (from, latitude, longitude) => {
    var chat = new Chat({
        username: 'Help Seeker',
        message: 'Please help me',
        location: {
            lat: latitude,
            lon: longitude
        }
    });

    chat.save();
    return {
        from,
        message: "Please help me!",
        url: `http://localhost:3000/userlocation?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    };
};

module.exports = {
    generateMessage,
    generateLocationMessage
};