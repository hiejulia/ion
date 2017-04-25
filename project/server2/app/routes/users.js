'use strict';

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const mainCtrl = require('../controllers/main');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');

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
//edit one user 
router.put(
  '/users/:userId',
  auth.ensured,
  userCtrl.findById,
  authorize.onlySelf,
  userCtrl.update,
  mainCtrl.toJSON('user')
);
// //delete one user 
// router.delete(
//   '/users/:userId',
//   auth.ensured,
//   userCtrl.delete
// );
//get user profile
router.get(
  '/users/:userId/profile',
  auth.ensured,
  userCtrl.getProfile,
  response.toJSON('user')
);
//create new block of profile 
router.post(
  '/users/:userId/profile/blocks',
  auth.ensured,
  userCtrl.getProfile,
  authorize.onlySelf,
  userCtrl.createProfileBlock,
  response.toJSON('block')
);
//update profile block of one user 
router.put(
  '/users/:userId/profile/blocks/:blockId',
  auth.ensured,
  userCtrl.getProfile,
  authorize.onlySelf,
  userCtrl.updateProfile,
  response.toJSON('block')
);
//get companies that user create
router.get(
  '/users/:userId/companies',
  auth.ensured,
  userCtrl.getUserCompanies,
  response.toJSON('companies')
);

module.exports = router;
