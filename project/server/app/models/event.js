'use strict';


var mongoose = require('mongoose');
 
var EventSchema = new mongoose.Schema({
 
    title: {
        type: String,
        required: true
    },
    description: {
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    }
 
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Event', EventSchema);