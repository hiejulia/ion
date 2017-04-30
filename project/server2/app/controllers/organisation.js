'use strict';

const MAX_LIMIT = 50;

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const Organisation = mongoose.model('Organisation');
const ObjectId = mongoose.Types.ObjectId;

/**
 *  Module exports
 */
module.exports.create = createOrganisation;
module.exports.checkUserOrganisation = checkUserOrganisation;
module.exports.findById = findOrganisationById;
module.exports.findByName = findOrganisationByName;
module.exports.getAll = getAllOrganisations;
module.exports.update = updateOrganisation;
module.exports.addMember = addOrganisationMember;
module.exports.removeMember = removeOrganisationMember;
module.exports.findByOwner = findOrganisationByOwner;
//create new organisation 
function createOrganisation(req, res, next) {
  let data = _.pick(req.body, ['name', 'address','location','description','numberOfEmployees','members','owner','owner']);
  // data.owner = req.resources.user._id;
  //data.members = [req.resources.user._id];

  Organisation.create(data, (err, organisation) => {
    if (err) {
      return next(err);
    }

    res.status(201).json(organisation);
  });
}
//check if owner of organisation
function checkUserOrganisation(req, res, next) {
  Organisation.findOne({ owner: req.user._id }, (err, organisation) => {
    if (err) {
      return next(err);
    }

    if (organisation) {
      return res.status(409).json({
        message: 'You already are the owner of ' + organisation.name,
        type: 'user_has_organisation'
      });
    }

    next();
  })
}
//find one organistion
function findOrganisationById(req, res, next) {
  if (!ObjectId.isValid(req.params.organisationId)) {
    return res.status(404).send({ message: 'Not found.'});
  }

  Organisation.findById(req.params.organisationId, (err, organisation) => {
    if (err) {
      return next(err);
    }

    req.resources.organisation = organisation;
    next();
  });
}

//find org by name => id
function findOrganisationByName(req, res, next) {
  // if (!ObjectId.isValid(req.params.name)) {
  //   return res.status(404).send({ message: 'Not found.'});
  // }

  Organisation.findOne({name:req.params.organisationName}).exec((err, organisation) => {
    if (err) {
      return next(err);
    }

    res.json(organisation);
  });
}
//get all organisations
function getAllOrganisations(req, res, next) {
  const limit = +req.query.limit || MAX_LIMIT;
  const skip = +req.query.skip || 0;

  Organisation
  .find()
  .limit(limit)
  .skip(skip)
  .exec((err, organisations) => {
    if (err) {
      return next(err);
    }

    req.resources.organisations = organisations;
    next();
  });
}
//update organisation 
function updateOrganisation(req, res, next) {
  var data = _.pick(req.body, ['name', 'address','location','description']);
  _.assign(req.resources.organisation, req.body);

  req.resources.organisation.save((err, updatedOrganisation) => {
    if (err) {
      return next(err);
    }

    req.resources.organisation = updatedOrganisation;
    next();
  });
}
//add new member to the organisation 
function addOrganisationMember(req, res, next) {
  var includes = _.includes(req.resources.organisation.members, req.body.member);

  if (includes) {
    return res.status(409).json({
      message: 'User is already a member of your company',
      type: 'already_member'
    });
  }

  req.resources.organisation.members.push(req.body.member);
  req.resources.organisation.save((err, updatedOrganisation) => {
    if (err) {
      return next(err);
    }

    req.resources.organisation = updatedOrganisation;
    next();
  });
}
//remove member of organisation
function removeOrganisationMember(req, res, next) {
  var includes = _.includes(req.resources.organisation.members, req.body.member);

  if (!includes) {
    return res.status(409).json({
      message: 'User is not a member of your company',
      type: 'not_member'
    });
  }

  _.pull(req.resources.porganisation.members, req.body.member);
  req.resources.organisation.save((err, updatedOrganistion) => {
    if (err) {
      return next(err);
    }

    req.resources.organisation = updatedOrganisation;
    next();
  });
}


//find organisation with the owner 
function findOrganisationByOwner(req, res, next) {
  if (!ObjectId.isValid(req.params.owner)) {
    return res.status(404).send({ message: 'Not found.'});
  }

  Organisation.find({owner:req.params.owner}).exec((err, organisation) => {
    if (err) {
      return next(err);
    }

    req.resources.organisation = organisation;
    next();
  });
}