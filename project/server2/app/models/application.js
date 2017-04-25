'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let ApplicationSchema = new Schema({
  user: {
    type: ObjectId,
    
    ref: 'User'
  },
  event: {
    type: ObjectId,
    
    ref: 'Event'
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'accepted', 'processed']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// compile Application model
module.exports = mongoose.model('Application', ApplicationSchema);
