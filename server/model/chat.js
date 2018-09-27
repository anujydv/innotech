const mongoose = require('mongoose');


var chatSchema = new mongoose.Schema({
    username:{
        type:string,
        trim:true
    },
    message:{
        type:string,
        trim:true
    },
    time:{
        type:string,
        required:true
    }

});

var Chat = mongoose.model('Chat',chatSchema);

module.exports ={
    Chat
}
