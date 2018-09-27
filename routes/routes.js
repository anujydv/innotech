var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('main');
});
router.get('/clothing', function(req, res, next) {
    res.render('clothing');
});
router.get('/food', function(req, res, next) {
    res.render('food');
});
router.get('/shelter', function(req, res, next) {
    res.render('shelter');
});
router.get('/water', function(req, res, next) {
    res.render('water');
});
router.get('/medicalCare', function(req, res, next) {
    res.render('medicalCare');
});
router.get('/sanitation', function(req, res, next) {
    res.render('sanitation');
});
router.get('/rescue', function(req, res, next) {
    res.render('chat.html');
});
module.exports = router;
