'use strict';

const express = require('express');
const router = express.Router();
const organisationCtrl = require('../controllers/organisation');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');

router.post(
  '/organisations',
  // auth.ensured,
  // organisationCtrl.checkUserOrganisation,
  organisationCtrl.create,
  response.toJSON('organisations')
);
//get
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
//edit one organisation
router.put(
  '/organisations/:organisationId',
  auth.ensured,
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

module.exports = router;
