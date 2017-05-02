'use strict';

const express = require('express');
const router = express.Router();
const organisationCtrl = require('../controllers/organisation');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');
const userCtrl = require('../controllers/user');
//create new organisation 
router.post(
  '/organisations',
  //auth.ensured,
  

  //organisationCtrl.checkUserOrganisation,
  organisationCtrl.create,
  response.toJSON('organisations')
);
//get all organisations
router.get(
  '/organisations',
  organisationCtrl.getAll,
  response.toJSON('organisations')
);

//get one organisation
router.get(
  '/organisations/:organisationId',
  organisationCtrl.findById,
  response.toJSON('organisation')
);
//delete event by id
router.delete(
  '/organisations/:organisationId',
  organisationCtrl.findById,
  organisationCtrl.deleteById,
  response.toJSON('organisation')
);


//get one organisation by name
router.get(
  '/organisations/name/:organisationName',
  organisationCtrl.findByName,
  response.toJSON('organisation')
);
//edit one organisation
router.put(
  '/organisations/:organisationId',
  // auth.ensured,
  organisationCtrl.findById,
  // authorize.onlyOwner,
  organisationCtrl.update,
  response.toJSON('organisation')
);
//create new members of one organisation
router.post(
  '/organisations/:organisationId/members',
  auth.ensured,
  organisationCtrl.findById,
  // authorize.onlyOwner,
  organisationCtrl.addMember,
  response.toJSON('organisation')
);
//delete one members
router.delete(
  '/organisations/:organisationId/members',
  auth.ensured,
  organisationCtrl.findById,
  // authorize.onlyOwner,
  organisationCtrl.removeMember,
  response.toJSON('organisation')
);



router.patch(
  '/organisations/:organisationId/favorites',
  //auth.ensured,
  organisationCtrl.findById,
  // authorize.onlyMembers,
 
  
organisationCtrl.updateFavorites,
  response.toJSON('organisation')
);


module.exports = router;
