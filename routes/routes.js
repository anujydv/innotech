var express = require('express');
var router = express.Router();
var Map = require('../server/model/camplocation');
var Chat = require("../server/model/chat");
var getcampdata = function(req) {
    // var st = 'helpavailable'.concat('.', page);
    Map.find({
        'helpavailable.water': 1
    }, function(err, doc) {
        // var doc1 = JSON.stringify(doc);
        console.log(doc1);
        // return doc;
    });
};

// rescue page routes
router.get('/', function(req, res, next) {
    res.render('main');
});
router.get('/clothing', function(req, res, next) {
    Map.find({
        'helpavailable.clothing': 1
    }, function(err, doc) {
        doc = JSON.stringify(doc);
        res.render('clothing', {
            data: doc
        });
    });
});
router.get('/food', function(req, res, next) {
    Map.find({
        'helpavailable.food': 1
    }, function(err, doc) {
        doc = JSON.stringify(doc);
        res.render('food', {
            data: doc
        });
    });

});
router.get('/shelter', function(req, res, next) {
    Map.find({
        'helpavailable.shelter': 1
    }, function(err, doc) {
        doc = JSON.stringify(doc);
        res.render('shelter', {
            data: doc
        });
    });
});
router.get('/water', function(req, res, next) {
    Map.find({
        'helpavailable.water': 1
    }, function(err, doc) {
        doc = JSON.stringify(doc);
        res.render('water', { data: doc });
    });
});
router.get('/userlocation', function(req, res, next) {
    Map.find({}, function(err, doc) {
        doc = JSON.stringify(doc);
        res.render('userlocation', {
            data: doc
        });
    });
});
router.get('/medicalCare', function(req, res, next) {
    Map.find({
        'helpavailable.medicalCare': 1
    }, function(err, doc) {
        doc = JSON.stringify(doc);
        res.render('medicalCare', {
            data: doc
        });
    });
});
router.get('/sanitation', function(req, res, next) {
    Map.find({
        'helpavailable.sanitation': 1
    }, function(err, doc) {
        doc = JSON.stringify(doc);
        res.render('sanitation', {
            data: doc
        });
    });
});
router.get('/rescue', function(req, res, next) {
    res.render('chat.html');
});
// router.get('/login', function(req, res, next) {
//     res.render('login.html');
// });

// camp dashboard routes
router.get('/map', function(req, res, next) {
    res.render('map/demo.html');
});
router.get('/camplogin', function(req, res, next) {
    res.render('login', {
        verified: 1
    });
});
router.get('/das-map', (req, res, next) => {
    Map.find({}, function(err, doc) {
        doc = JSON.stringify(doc);
        res.render('adminmap', {
            data: doc
        });
    });
});
router.get('/dashboard', function(req, res, next) {
    res.render('admin');
});
router.get('/addcamp', function(req, res, next) {
    res.render('register');
});
router.get('/updaterescueperson', function(req, res) {
    Chat.find({}, function(err, doc) {
        res.render('rescuedata', { data: doc });

    });
    // res.render('rescuedata');
});

var getcampdata = function(req) {
    // var st = 'helpavailable'.concat('.', page);
    Map.find({
        'helpavailable.water': 1
    }, function(err, doc) {
        // var doc1 = JSON.stringify(doc);
        // console.log(doc1);
        return doc;
    });
};

module.exports = router;