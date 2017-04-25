'use strict';

const mongoose = require('mongoose');
const commonHelper = require('../helpers/common');
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
      type:String,
      required:true
  },
  fromUser:{
      type:Schema.ObjectId,
      ref:'User'
  }
  
  
});



module.exports = mongoose.model('Comment', CommentSchema);
