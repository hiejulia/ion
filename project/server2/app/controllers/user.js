'use strict';

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Organisation = mongoose.model('Organisation');
const ProfileBlock = mongoose.model('ProfileBlock');
const ObjectId = mongoose.Types.ObjectId;

/**
 *  Module exports
 */
module.exports.findById = findUserById;
module.exports.getAll = getAllUsers;
module.exports.update = updateUser;
module.exports.delete = deleteUser;
module.exports.getProfile = getUserProfile;
module.exports.updateProfile = updateUserProfile;
module.exports.createProfileBlock = createUserProfileBlock;
module.exports.getUserOrganisations = getUserOrganisations;
module.exports.getAuthUser = getAuthUser;
module.exports.updateRegisterEvents = updateRegisterEvents;
module.exports.updateFavoriteOrg = updateFavoriteOrg;


//find user by id
function findUserById(req, res, next) {
  if (!ObjectId.isValid(req.params.userId)) {
    return res.status(404).json({ message: 'User not found '});
  }

  User.findById(req.params.userId, (err, user) => {//find by id 
    if (err) {
      next(err);
    } else if (user) {
      //set req.resources = user
      req.resources.user = user;
      next();
    } else {
      next(new Error('User not found'));
    }
  });
};
//get all users
function getAllUsers(req, res, next) {
  User.find((err, users) => {
    if (err) {
      return next(err);
    }

    req.resources.users = users;
    next();
  });
};
//update user
function updateUser(req, res, next) {
  var user = req.resources.user;
  _.assign(user, req.body);

  user.save((err, updatedUser) => {
    if (err) {
      return next(err);
    }

    res.resources.user = updatedUser;
    next();
  });
};
//delete user 
function deleteUser(req, res, next) {
  req.resources.user.remove((err) => {
    if (err) {
      return next(err);
    }

    res.status(204).json();
  });
}
//get user profile
function getUserProfile(req, res, next) {
  User
  .findOne(req.params.userId)
  .select('+profile')
  .exec((err, user) => {
    if (err) {
      return next(err);
    }

    req.resources.user = user;
    next();
  });
}

function createUserProfileBlock(req, res, next) {
  if (!req.body.title) {
    return res.status(400).json({ message: 'Block title is required' });
  }

  var block = new ProfileBlock(req.body);
  //block.data = block.data || [];
  req.resources.user.profile.push(block);

  req.resources.user.save((err, updatedProfile) => {
    if (err) {
      return next(err);
    }

    req.resources.block = block;
    next();
  });
}

function updateUserProfile(req, res, next) {
  // var block = req.resources.user.profile.find(function(b) {
  //   return b._id.toString() === req.params.blockId;
  // });

  let block = req.resources.user.profile.id(req.params.blockId);

  if (!block) {
    return res.status(404).json({ message: '404 not found.'});
  }

  if (!block.title) {
    return res.status(400).json({ message: 'Block title is required' });
  }

  let data = _.pick(req.body, ['title', 'data']);
  _.assign(block, data);

  req.resources.user.save((err, updatedProfile) => {
    if (err) {
      return next(err);
    }

    req.resources.block = block;
    next();
  });
}
//get user organisations
// function getUserOrganisations(req, res, next) {
//   Organisation.find({ owner: req.user._id }, (err, organisations) => {
//     if (err) {
//       return next(err);
//     }

//     req.resources.organisations = organisations;
//   });
// }
function getUserOrganisations(req, res, next) {
  Organisation.find({ owner: req.params.userId}, (err, organisations) => {
    if (err) {
      return next(err);
    }

    req.resources.organisations = organisations;
    next();
  });
}
//get auth user 
function getAuthUser(req, res, next) {
  console.log(req.user.roles);
  console.log(req.user.roles.indexOf('owner'));
  console.log(req.user.roles.indexOf('member'));

  if (req.user.roles.indexOf('owner') !== -1 || req.user.roles.indexOf('member') !== -1) {
    return Organisation.findOne({ members: req.user._id }, (err, organisation) => {
      console.log(organisation);
      if (err) {
        return next(err);
      }

      var user = req.user.toObject();
      user.organisation = organisation;
      res.json(user);
    });
  }

  res.json(req.user);//send back user info 
}


function updateRegisterEvents(req,res,next){


if(_.findIndex(req.resources.user.registerEvents,req.body) <0){
  req.resources.user.registerEvents.push(req.body);
} else if (_.findIndex(req.resources.user.registerEvents,req.body) >-1){
  req.resources.user.registerEvents.splice(_.findIndex(req.resources.user.registerEvents,req.body),1);
  // req.resources.event.participants.pop();
}



  



  req.resources.user.save((err, updatedUser) => {
    if (err) {
      return next(err);
    }

    // res.json(event);

    //next()

    req.resources.user = updatedUser;
    next();
  });

}



function updateFavoriteOrg(req,res,next){
  req.resources.user.favoriteOrg.push(req.body);
  req.resources.user.save((err, updatedUser) => {
    if (err) {
      return next(err);
    }

    // res.json(event);

    //next()

    req.resources.user = updatedUser;
    next();
  });






}