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
    required: true
   },
  slug: {
    type: String
  },
  location: {
    type: String,
    required:true
  },
  owner: {
    type: ObjectId,
    required: true,
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

  country: {
    type: String,
    enum: cntEnum
  },
  address: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  numberOfEmployees:{
    type:Number
    }
});

OrganisationSchema.pre('save', function(next) {
  this.slug = commonHelper.createSlug(this.name);
  next();
});

// compile organisation model
module.exports = mongoose.model('Organisation', OrganisationSchema);
