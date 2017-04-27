'use strict';

const express = require('express');
const router = express.Router();
const organisationCtrl = require('../controllers/organisation');
const eventCtrl = require('../controllers/event');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');
//get all events
router.get(
  '/events',
  eventCtrl.getAll,
  response.toJSON('events')
);

router.get(
  '/events/:eventId',
  eventCtrl.findById,
  response.toJSON('event')
);

router.get(
  '/organisations/:organisationId/events',
  eventCtrl.getAll,
  response.toJSON('events')
);

router.post(
  '/organisations/:organisationId/events',
  auth.ensured,
  organisationCtrl.findById,
  // authorize.onlyMembers,
  eventCtrl.create
);

router.put(
  '/organisations/:organisationId/events/:eventId',
  auth.ensured,
  organisationCtrl.findById,
  // authorize.onlyMembers,
  eventCtrl.findById,
  eventCtrl.update
);

router.delete(
  '/organisations/:organisationId/events/:eventId',
  auth.ensured,
  organisationCtrl.findById,
  // authorize.onlyMembers,
  eventCtrl.findById,
  eventCtrl.remove
);

module.exports = router;
