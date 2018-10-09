const mongoose = require('mongoose');


var mapSchema = new mongoose.Schema({
    location: {
        lat: {
            type: Number,
            required: true,
            default: 0
        },
        lon: {
            type: Number,
            required: true,
            default: 0
        }
    },
    campname: {
        type: String,
    },
    campowner: {
        type: String,
    },
    mobile: {
        type: String
    },
    address: {
        type: String,
        required: true,
        default: ""
    },
    pincode: {
        type: Number,
        // required: true
    },
    helpavailable: {
        shelter: {
            type: Number,
            max: 1,
            min: 0,
            default: 0
        },
        food: {
            type: Number,
            max: 1,
            min: 0,
            default: 0
        },
        water: {
            type: Number,
            max: 1,
            min: 0,
            default: 0
        },
        clothing: {
            type: Number,
            max: 1,
            min: 0,
            default: 0
        },
        medicalcare: {
            type: Number,
            max: 1,
            min: 0,
            default: 0
        },
        sanitaion: {
            type: Number,
            max: 1,
            min: 0,
            default: 0
        }
    }
});

var Map = mongoose.model('Map', mapSchema);

module.exports = Map;
