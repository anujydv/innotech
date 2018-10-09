var express = require('express');
var router = express.Router();

// rescue page routes
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
router.get('/login', function(req, res, next) {
    res.render('login.html');
});

// camp dashboard routes
router.get('/map', function (req, res, next) {
    res.render('map/demo.html');
});
router.get('/camplogin', function (req, res, next) {
    res.render('login', {
        verified: 1
    });
});
router.get('/das-map',(req,res,next)=>{
    res.render('adminmap.html');
});
router.get('/dashboard', function (req, res, next) {
    res.render('admin.html');
});
router.get('/addcamp', function (req, res, next) {
    res.render('register');
});

module.exports = router;
