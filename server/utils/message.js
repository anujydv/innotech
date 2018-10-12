var moment = require('moment');

var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    };
};

var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        message: "Please help me!",
        url: `http://localhost:3000/userlocation?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    };
};

module.exports = { generateMessage, generateLocationMessage };