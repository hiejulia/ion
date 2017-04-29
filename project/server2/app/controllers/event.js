'use strict';

const MAX_LIMIT = 50;
const EVENT_FIELDS = ['title','location', 'description','office','address','numberOfParticipantsEstimated','isActive','endDate','startDate'];

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const Event = mongoose.model('Event');
const ObjectId = mongoose.Types.ObjectId;

/**
 *  Module exports
 */
module.exports.create = createEvent;
module.exports.findById = findEventById;
module.exports.getAll = getAllEvents;
module.exports.update = updateEvent;
module.exports.remove = removeEvent;
//create new event 
function createEvent(req, res, next) {
  let data = _.pick(req.body, EVENT_FIELDS);
  //data.organisation = req.resources.organisation._id;
  Event.create(data, (err, event) => {
    if (err) {
      return next(err);
    }

    res.status(201).json(event);
  });
}
//find event by Id find one event
function findEventById(req, res, next) {
  if (!ObjectId.isValid(req.params.eventId)) {
    res.status(404).send({ message: 'Event not found'});
  }

  Event.findById(req.params.eventId, (err, event) => {
    if (err) {
      return next(err);
    }

    req.resources.event = event;//req.resources.event
    next();
  });
}
//get all events
function getAllEvents(req, res, next) {
  const limit = +req.query.limit || MAX_LIMIT;
  const skip = +req.query.skip || 0;


  Event
  .find()
  .limit(limit)
  .skip(skip)
  // .populate('organisation')
  .exec((err, events) => {
    if (err) {
      return next(err);
    }

    req.resources.events = events;
    next();
  });
}



//update event 
function updateEvent(req, res, next) {
  let data = _.pick(req.body, ['title', 'description','location','office','address','numberOfParticipantsEstimated','isActive','timeStart','timeEnd']);
  _.assign(req.resources.event, data);

  req.resources.event.save((err, updatedEvent) => {
    if (err) {
      return next(err);
    }

    res.json(event);
  });
}

function removeEvent(req, res, next) {
  req.resources.event.remove((err) => {
    if (err) {
      return next(err);
    }

    res.json(req.resources.event);
  });
}

//get all comments of one event

//get all participants of one event


//get all events of a user if user is member or owner





// //get all events
// function getAllEvents(req, res, next) {
//   const limit = +req.query.limit || MAX_LIMIT;
//   const skip = +req.query.skip || 0;
//   let query = _.pick(req.query, ['industry', 'typeOfEvent']);

//   if (req.params.organisationId) {
//     query.organisation = req.params.organisationId;
//   }

//   Event
//   .find()
//   .limit(limit)
//   .skip(skip)
//   .populate('organisation')
//   .exec((err, events) => {
//     if (err) {
//       return next(err);
//     }

//     req.resources.events = events;
//     next();
//   });
// }