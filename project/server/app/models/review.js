'use strict';


var mongoose = require('mongoose');


var	Schema = mongoose.Schema;





var ReviewSchema = new mongoose.Schema({
    createdOn: {
		type: Date,
		default: Date.now
	},
    title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
    description: {
		type: String,
		default: '',
		required: 'Please provide a description',
		trim: true
	},
    content: {
		type: String,
		default: '',
		trim: true
	},
    location: {
        type:String,
        trim:true,
        default:'',
        required:'Location cannot be blank'
    },
    startDate: {
		type: Date
	},
	endDate: {
		type: Date
	},
    organization: {
		type: String,
		default: '',		
		trim: true
	},
    rating: Number,
    isActive: {
		type: Boolean,
		default: true
	},
    participants: [
		{user: Schema.ObjectId}
	],
	numberOfParticipants:Number,
    createdBy: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Review', ReviewSchema);