'use strict';

const mongoose = require('mongoose');
const commonHelper = require('../helpers/common');

const Industries = require('../../config/variables/industries');
const Countries = require('../../config/variables/countries');
const Eventtypes = require('../../config/variables/eventtypes');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// const indEnum = Industries.map(item => item.slug);
// const cntEnum = Countries.map(item => item.code);
// const eventEnum = Eventtypes.map(item => item.slug);

let EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
 location:{
   type:String
 },
  description: {
    type: String
  },
  office:{
    type:String,
   
  },
  address:{
    type:String,
    
  },
  typeOfEvent: {
    type: String,
    enum:['Event','Workshop','Meetup','Conference','Other','Seminar','Meeting','Fair']
  },
  numberOfParticipantsEstimated:{
    type:Number
  },
  isActive: {
    type:Boolean
  },
  userCreated:{
    type:ObjectId,
    ref:'User'
  },
  timeStart:{
    type:String
   
  },
  timeEnd:{
    type:String
  },
  organisation: {
    type: ObjectId,
    
    ref: 'Organisation'
  },
  industry: {
    type:String,
    enum:['Technology','Business','Science','Engineer','Tourism','Physics','Chemistry','Biomedical','Industrial','Other']
    
  },
  country: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
    participants: {
    type: Array,
    default: []
  },
});

EventSchema.pre('save', function(next) {
  this.slug = commonHelper.createSlug(this.title);
  next();
});

// compile Event model
module.exports = mongoose.model('Event', EventSchema);
