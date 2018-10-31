var express = require('express');
var router = express.Router();
var Map = require('../server/model/camplocation');
var Chat = require("../server/model/chat");

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
        res.render('water', {
            data: doc
        });
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
    Chat.find({
        status: 0,
        'location.lat': {
            $ne: null
        },
        'location.lon': {
            $ne: null
        }
    }, function(err, doc) {
        res.render('rescuedata', {
            data: doc
        });
    });
});
router.get("/updatedata/:id", function(req, res) {
    Chat.findByIdAndUpdate(
        req.params.id, {
            status: 1
        },
        function(err, doc) {
            res.redirect('/updaterescueperson');
        });
});
router.get('/chat', function(req, res) {
    res.render('adminchat.html');
});
// camp function
// var getcampdata = function(req) {
//     Map.find({
//         'helpavailable.water': 1
//     }, function(err, doc) {
//         return doc;
//     });
// };

module.exports = router;