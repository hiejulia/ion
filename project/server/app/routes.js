var AuthenticationController = require('./controllers/authentication'),  
    TechEventsController = require('./controllers/techevents'),  
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');
 
var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});
 
module.exports = function(app){
 
    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        techeventsRoutes = express.Router();
 
    // Auth Routes
    apiRoutes.use('/auth', authRoutes);
 
    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);
 
    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });
 
    // TechEvents Routes
    apiRoutes.use('/techevents', techeventsRoutes);
 
    techeventsRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['user','admin']), TechEventsController.getTechEvents);
    techeventsRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['user','admin']), TechEventsController.createTechEvents);
    techeventsRoutes.delete('/:techevent_id', requireAuth, AuthenticationController.roleAuthorization(['admin']), TechEventsController.deleteTechEvents);
 
    // Set up routes
    app.use('/api', apiRoutes);
 
}