const mongoose = require('mongoose');


var mapSchema = new mongoose.Schema({
    lon: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    camp: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    }



});

var map = mongoose.model('map', mapSchema);

module.exports = map;