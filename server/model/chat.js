const mongoose = require('mongoose');


var chatSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true
    },
    message:{
        type:String,
        trim:true
    },
    time:{
        type:String,
        required:true
    }

});

var Chat = mongoose.model('Chat',chatSchema);

module.exports ={
    Chat
}
