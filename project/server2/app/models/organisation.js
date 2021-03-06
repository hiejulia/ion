'use strict';

const mongoose = require('mongoose');
const commonHelper = require('../helpers/common');
const Countries = require('../../config/variables/countries');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const cntEnum = Countries.map(item => item.code);




let OrganisationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true,
    trim:true
    
   },
 
  location: {
    type: String,
    required:true,
    trim:true
  },
  owner: {
    type: ObjectId,
    required:true,
    ref: 'User'
  },
  members: {
    type: Array,
    default: []
  },

  description: {
    type: String,
    required:true
  },
 industry: {
    type:String,
    enum:['Technology','Business','Science','Engineer','Tourism','Physics','Chemistry','Biomedical','Industrial','Other']
    
  },

  country: {
    type: String
  },
  address: {
    type: String,
    
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  numberOfEmployees:{
    type:Number,
    required:true
  },
    favorites:{
    type:Array,
    default:[]
  }
});

OrganisationSchema.pre('save', function(next) {
  this.slug = commonHelper.createSlug(this.name);
  next();
});

// compile organisation model
module.exports = mongoose.model('Organisation', OrganisationSchema);
