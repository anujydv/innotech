const mongoose = require('mongoose');


var mapSchema = new mongoose.Schema({
    longitude: {
        type: String,
        trim: true
    },
    latitude: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    area: {
        type: string,
        required: true
    },
    pincode: {
        type: number,
        required: true
    }



});

var map = mongoose.model('map', mapSchema);

module.exports = {
    map
}
