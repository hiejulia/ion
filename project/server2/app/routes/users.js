'use strict';

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const mainCtrl = require('../controllers/main');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');
//get all users
router.get(
  '/users',
  auth.ensured,
  userCtrl.getAll,
  mainCtrl.toJSON('users')
);
//get one user
router.get(
  '/users/:userId',
  auth.ensured,
  userCtrl.findById,
  mainCtrl.toJSON('user')
);
//edit user
router.put(
  '/users/:userId',
  auth.ensured,
  userCtrl.findById,
  authorize.onlySelf,
  userCtrl.update,
  mainCtrl.toJSON('user')
);

router.delete(
  '/users/:userId',
  auth.ensured,
  userCtrl.delete
);

router.get(
  '/users/:userId/profile',
  auth.ensured,
  userCtrl.getProfile,
  response.toJSON('user')
);

router.post(
  '/users/:userId/profile/blocks',
  auth.ensured,
  userCtrl.getProfile,
  authorize.onlySelf,
  userCtrl.createProfileBlock,
  response.toJSON('block')
);

router.put(
  '/users/:userId/profile/blocks/:blockId',
  auth.ensured,
  userCtrl.getProfile,
  authorize.onlySelf,
  userCtrl.updateProfile,
  response.toJSON('block')
);
//if user is owner => list of organisations show in user profile

router.get(
  '/users/:userId/organisations',
  auth.ensured,
  userCtrl.getUserOrganisations,
  response.toJSON('organisations')
);

module.exports = router;