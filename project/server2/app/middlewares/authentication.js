'use strict';

/**
 * Module exports
 */
module.exports.ensured = ensureAuthenticated

/**
 *  Checks if a user is authenticated or not
 *  content negotiation is present
 */
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
    console.log('ensured auth');
  }


  res.format({
    html: function() {
      res.redirect('/login');
    },
    // just in case :)    
    text: function() {
      res.redirect('/login');
    },
    json: function() {//send back json unauthorized user 
      res.status(401).json({ message: 'User is not authorized' });
    }
  });
};
