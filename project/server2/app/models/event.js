'use strict';

const mongoose = require('mongoose');
const commonHelper = require('../helpers/common');

const Industries = require('../../config/variables/industries');
const Countries = require('../../config/variables/countries');
const Eventtypes = require('../../config/variables/eventtypes');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const indEnum = Industries.map(item => item.slug);
const cntEnum = Countries.map(item => item.code);
const eventEnum = Eventtypes.map(item => item.slug);

let EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String
  },
 location:{
   type:String,
   required:true
 },
  description: {
    type: String
  },
  office:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  typeOfEvent: {
    type: String,
    
    enum: eventEnum
  },
  numberOfParticipantsEstimated:{
    type:Number,
    required:true
  },
  isActive: {
    type:Boolean,
    required:true
  },
  userCreated:{
    type:ObjectId,
    ref:'User'
  },
  timeStart:{
    type:String,
    required:true
  },
  timeEnd:{
    type:String,
    required:true
  },
  organisation: {
    type: ObjectId,
    
    ref: 'Organisation'
  },
  industry: {
    type: String,
    
    enum: indEnum
  },
  country: {
    type: String,
    
    enum: cntEnum
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

EventSchema.pre('save', function(next) {
  this.slug = commonHelper.createSlug(this.title);
  next();
});

// compile Event model
module.exports = mongoose.model('Event', EventSchema);
