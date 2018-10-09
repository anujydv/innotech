var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('main');
});
router.get('/demo', function(req, res, next) {
    res.render('demo/demo.html');
});
router.get('/camplogin', function(req, res, next) {
    res.render('camp/login', { verified: 1 });
});
router.get('/addcamp', function(req, res, next) {
    res.render('camp/register');
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
router.get('/login', function(req, res, next) {
    res.render('login.html');
});
module.exports = router;