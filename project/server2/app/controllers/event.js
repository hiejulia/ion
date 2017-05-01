'use strict';

const MAX_LIMIT = 50;
const EVENT_FIELDS = ['title','location', 'description','office','address','numberOfParticipantsEstimated','isActive','endDate','startDate','industry','typeOfEvent','organisation'];

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
module.exports.findByIndustry = findEventByIndustry;
module.exports.findEventByOrg = findEventByOrg;
module.exports.findParticipants=getAllParticipants;
module.exports.updateParticipants=updateParticipants;



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

//find event by industry find one event
function findEventByIndustry(req, res, next) {
  // if (!String.isValid(req.params.eventIndustry)) {
  //   res.status(404).send({ message: 'Event not found'});
  // }

  Event.find({industry:req.params.eventIndustry}).exec((err, events) => {
    if (err) {
      return next(err);
    } else{
   res.json(events);
    }
    // req.resources.events = events;
    // next();
  });
}


//find event by event id
function findEventByOrg(req, res, next) {
  // if (!String.isValid(req.params.eventIndustry)) {
  //   res.status(404).send({ message: 'Event not found'});
  // }

  Event.find({organisation:req.params.organisationId}).exec((err, events) => {
    if (err) {
      return next(err);
    } else{
   res.json(events);
    }
    // req.resources.events = events;
    // next();
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
//update event participants here

//get all participants of an event
function getAllParticipants(req, res, next) {



  // Event
  // .find()
  
  // // .populate('organisation')
  // .exec((err, events) => {
  //   if (err) {
  //     return next(err);
  //   }

  //   req.resources.events = events;
  //   next();
  // });


  Event.find({organisation:req.params.organisationId}).select('participants').exec((err, participants) => {
    if (err) {
      return next(err);
    } else{
   res.json(participants);
    }
    // req.resources.events = events;
    // next();
  });
}

//update one event
function updateEvent(req, res, next) {
  let data = _.pick(req.body, ['title', 'description','location','office','address','numberOfParticipantsEstimated','isActive','timeStart','timeEnd']);
  _.assign(req.resources.event, req.body);




  req.resources.event.save((err, updatedEvent) => {
    if (err) {
      return next(err);
    }

    // res.json(event);

    //next()

    req.resources.event = updatedEvent;
    next();
  });


}
// ContactSchema.findOne({phone: request.phone}, function(err, contact) {
//     if(!err) {
//         if(!contact) {
//             contact = new ContactSchema();
//             contact.phone = request.phone;
//         }
//         contact.status = request.status;
//         contact.save(function(err) {
//             if(!err) {
//                 console.log("contact " + contact.phone + " created at " + contact.createdAt + " updated at " + contact.updatedAt);
//             }
//             else {
//                 console.log("Error: could not save contact " + contact.phone);
//             }
//         });
//     }
// });





//delete one event
function removeEvent(req, res, next) {
  req.resources.event.remove((err) => {
    if (err) {
      return next(err);
    }
res.json(req.resources.events);

   // res.json(req.resources.event);
  });
}

//get all comments of one event

//get all participants of one event


//get all events of a user if user is member or owner





//get all events
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



//update participants
function updateParticipants(req, res, next) {
  //let data = _.pick(req.body, ['participants']);
  //_.assign(req.resources.event, req.body);
//_.assign(req.resources.event, req.body);


req.resources.event.participants.push(req.body);


  req.resources.event.save((err, updatedEvent) => {
    if (err) {
      return next(err);
    }

    // res.json(event);

    //next()

    req.resources.event = updatedEvent;
    next();
  });


}

// '/events/:eventId/participants',