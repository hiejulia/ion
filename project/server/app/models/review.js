'use strict';


var mongoose = require('mongoose');


var	Schema = mongoose.Schema;





var ReviewSchema = new mongoose.Schema({

    title: String,
    description: String,
    rating: Number,

    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Review', ReviewSchema);