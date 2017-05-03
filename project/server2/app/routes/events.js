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
  '/events/industry/:eventIndustry',
  eventCtrl.findByIndustry,
  response.toJSON('event')
);





router.get(
  '/organisations/:organisationId/events',
  eventCtrl.findEventByOrg,
  response.toJSON('events')
);


//create on event
router.post(
  '/organisations/:organisationId/events',
  //auth.ensured,
  organisationCtrl.findById,
  // authorize.onlyMembers,
  eventCtrl.create
);


//update the event 
//get one event by id base on org id
router.put(
  '/organisations/:organisationId/events/:eventId',
  //auth.ensured,
  organisationCtrl.findById,
  // authorize.onlyMembers,
  eventCtrl.findById,
  eventCtrl.update,
  response.toJSON('event')
);

//update participants 
router.get(
  '/events/:eventId/participants',
  //auth.ensured,
  eventCtrl.findById,
  // authorize.onlyMembers,
 
  eventCtrl.findParticipants,

  response.toJSON('participants')//tra ve list participants 
);


router.patch(
  '/events/:eventId/participants',
  //auth.ensured,
  eventCtrl.findById,
  // authorize.onlyMembers,
 
  
eventCtrl.updateParticipants,
  response.toJSON('event')
);



//delete one event
router.delete(
  '/organisations/:organisationId/events/:eventId',
  //auth.ensured,
  organisationCtrl.findById,
  // authorize.onlyMembers,
  eventCtrl.findById,
  eventCtrl.remove

);




module.exports = router;
