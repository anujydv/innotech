const mongoose = require('mongoose');

var loginSchema = mongoose.Schema({
    campid: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

var Login = mongoose.model('Login', loginSchema);
module.exports = Login;
