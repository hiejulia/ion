'use strict';

/**
 *  Module dependencies
 */
const passport = require('passport');
const mongoose = require('mongoose');

/**
 *  Module exports
 */
module.exports.login = loginUser;
module.exports.logout = logoutUser;

/**
 *  Uses Passport's local strategy to sign in a user
 */
function loginUser(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).json(info);
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      res.status(200).json(user);//send back user 
    });
  })(req, res, next);
}

function logoutUser(req, res, next) {//log out
  req.logout();
  res.redirect('/');
}
