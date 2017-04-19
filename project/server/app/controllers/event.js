'use strict';

const MAX_LIMIT = 30;

const _ = require('lodash');
const mongoose = require('mongoose');
const Event = mongoose.model('Event');
const ObjectId = mongoose.Types.ObjectId;

module.exports.create = createEvent;
module.exports.findById = findEventById;
module.exports.getOne = getOneEvent;
module.exports.getAll = getAllEvents;
module.exports.update = updateEvent;
module.exports.remove = removeEvent;

function createEvent(req, res, next) {
  Event.create(req.body, (err, event) => {
    if (err) {
      return next(err);
    }

    res.status(201).json(event);
  });
}

function findEventById(req, res, next, id) {
  if (!ObjectId.isValid(id)) {
    res.status(404).send({ message: 'Not found.'});
  }

  Event.findById(id, (err, event) => {
    if (err) {
      next(err);
    } else if (event) {
      req.event = event;
      next();
    } else {
      next(new Error('failed to find event'));
    }
  });
}

function getOneEvent(req, res, next) {
  if (!req.event) {
    return next(err);
  }

  res.json(req.event);
}

function getAllEvents(req, res, next) {
  const limit = +req.query.limit || MAX_LIMIT;
  const skip = +req.query.offset || 0;
  const query = {};

  if (limit > MAX_LIMIT) {
    limit = MAX_LIMIT;
  }

  Event
  .find(query)
  .skip(skip)
  .limit(limit)
  .sort({createdAt: 'desc'})
  .exec((err, events) => {
    if (err) {
      return next(err);
    }

    res.json(events);
  });
}

function updateEvent(req, res, next) {
  let event = req.event;
  _.assign(event, req.body);

  event.save((err, updatedEvent) => {
    if (err) {
      return next(err);
    }

    res.json(updatedEvent);
  });
}

function removeEvent(req, res, next) {
  req.event.remove((err) => {
    if (err) {
      return next(err);
    }

    res.status(204).json();
  });
}