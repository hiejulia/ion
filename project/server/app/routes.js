'use strict';
var AuthenticationController = require('./controllers/authentication'),  
    EventController = require('./controllers/events'),  
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');
 
var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});
 
module.exports = function(app){
 
    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        eventRoutes = express.Router();
 
    // Auth Routes
    apiRoutes.use('/auth', authRoutes);
 
    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);
 
    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });
 
    // Todo Routes
    apiRoutes.use('/events', eventRoutes);
 
    eventRoutes.get('/', requireAuth,  EventController.getEvents);
    eventRoutes.post('/', requireAuth, EventController.createEvent);
    eventRoutes.delete('/:event_id', requireAuth, AuthenticationController.roleAuthorization(['admin']), EventController.deleteEvent);
 
    // Set up routes
    app.use('/api', apiRoutes);
 
}