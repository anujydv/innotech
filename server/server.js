var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');



var app = express();
var routes = require('../routes/routes.js');


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

var port = 3000 || process.env.PORT;
app.listen(port, function() {
    console.log("Server running at port " + port);
});
