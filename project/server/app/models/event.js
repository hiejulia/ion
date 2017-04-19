'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EventSchema = new Schema({
  
  title: {
    type: String
  },
  description: {
    type: String
  },
  location: {
    type: String
  },
  typeOfEvent: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// compile and export the Contact model
module.exports = mongoose.model('Event', EventSchema);