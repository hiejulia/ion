'use strict';

module.exports.onlyOwner = authorizeOnlyToOrganisationOwner;
module.exports.onlyMembers = authorizeOnlyToOrganisationMembers;
module.exports.onlySelf = authorizeOnlySelf;

// function authorizeOnlyOwner(entity) {
//   return function(req, res, next) {
//     var check = req.resources[entity].owner._id || req.resources[entity].owner;
//
//     if (typeof check !== 'string') {
//       check = check.toString();
//     }
//
//     if (check !== req.user._id.toString()) {
//       return res.status(403).json({ message: 'Unauthorized' });
//     }
//
//     next();
//   }
// };

function authorizeOnlyToOrganisationMembers(req, res, next) {
  // check if user is member of organisation
  const isMember = req.resources.organisation.members.find((member) => {
    return member.toString() === req.user._id.toString();
  });

  if (!isMember) {
    return res.status(403).json({ message: 'Unauthorized for member of organisation' });
  }

  next();
}

function authorizeOnlyToOrganisationOwner(req, res, next) {
  const isOwner = req.resources.organisation.owner.toString() === req.user._id.toString();

  if (!isOwner) {
    return res.status(403).json({ message: 'Unauthorized for owner of organisation' });
  }

  next();
}

function authorizeOnlySelf(req, res, next) {
  const isSelf = req.resources.user._id.toString() === req.user._id.toString();

  if (!isSelf) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  next();
}
