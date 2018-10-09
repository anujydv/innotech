var express = require('express');
var router = express.Router();
const Login = require('../server/model/login');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

router.post('/', (req, res) => {
    var login = req.body;
    Login.find(login, (err, doc) => {
        if (doc.length === 0) {
            var flag = 0;
            res.render('camp/login', { verified: flag });
        } else {
            res.render('camp/register');
        }
    });
});

module.exports = router;
