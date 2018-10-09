var express = require('express');
var router = express.Router();
const Map = require('../server/model/camplocation');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


router.post('/', (req, res) => {
    // console.log(req);

    var data = req.body;
    // console.log(data);

    var campdata = {
        location: {
            lat:data.latitude ,
            lon:data.longitude
        },
        campname: data.campname,
        campowner: data.campowner,
        mobile: data.mobile,
        address: data.address,
        pincode: data.pincode,
        helpavailable: {
            shelter:checkavailability(data.shelter) ,
            food: checkavailability(data.food),
            water: checkavailability(data.water),
            clothing: checkavailability(data.clothing),
            medicalcare: checkavailability(data.medicalcare),
            sanitaion: checkavailability(data.sanitaion)
        }
    };
    var Mapdata = new Map(campdata);
    Mapdata.save();
    res.render('register');
});

var checkavailability = (str)=>{
    if(str === 'on'){
        return 1;
    }else{
        return 0;
    }
}
module.exports = router;
