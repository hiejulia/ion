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
    type: String,
    maxlength:500
  },
  office:{
    type:String
  },
  address:{
    type:String
  },
  typeOfEvent: {
    type: String,
    required: true,
    enum: eventEnum
  },
  numberOfParticipantsEstimated:{
    type:Number,
    required:true
  },
  comments:{
    type:ObjectId,
    ref:'Comment'
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
    required: true,
    ref: 'Organisation'
  },
  industry: {
    type: String,
    required: true,
    enum: indEnum
  },
  country: {
    type: String,
    required: true,
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

// compile Job model
module.exports = mongoose.model('Event', EventSchema);