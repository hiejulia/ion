'use strict';


var mongoose = require('mongoose');
 
var EventSchema = new mongoose.Schema({
 
    title: {
        type: String,
        required: true
    },
    description: {
        type:String,
    },
    location:{
        type:String,
    }
 
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Event', EventSchema);