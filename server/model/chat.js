const mongoose = require('mongoose');


var chatSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        default: ""
    },
    message: {
        type: String,
        trim: true,
        default: ""
    },
    timestamp: {
        type: Date,
        require: true,
        default: Date.now()
    },
    status: {
        type: Number,
        default: 0
    },
    location: {
        lat: {
            type: Number,
            default: 0
        },
        lon: {
            type: Number,
            default: 0
        }
    }
}, {
    versionKey: false
});

var Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;