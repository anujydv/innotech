var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var bodyParser = require('body-parser');

const {
    Chat
} = require('../server/model/chat');
const Map = require('../server/model/camplocation');
const Login = require('../server/model/login');


// Login.create({
//     campid: "admin",
//     password: "admin"
// });
router.post('/signin', (req, res) => {
    // var camp = new campid(req.body);
    console.log(req.body.name);

});






module.exports = router;