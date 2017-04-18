'use strict';

const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const serveStatic = require('serve-static');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const config = require('./index');

module.exports.init = initExpress;

function initExpress(app) {
  const root = app.get('root');
  const sessionOpts = {
    secret: config.session.secret,
    key: 'skey.sid',
    resave: config.session.resave,
    saveUninitialized: config.session.saveUninitialized
  };

  //common express configs
  //add middleware

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
//cors origin
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


  app.use(methodOverride());
  app.disable('x-powered-by');

  if (config.session.type === 'mongo') {
    sessionOpts.store = new MongoStore({
      url: config.mongodb.uri
    });
  }

  app.use(session(sessionOpts));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(function(req, res, next) {
    req.resources = req.resources || {};
    res.locals.app = config.app;
    res.locals.currentUser = req.user;

    next();
  });

  // always load static files if dev env
  if (config.serveStatic) {
    app.use(serveStatic(path.join(root, 'public')));
    app.use('/v1', serveStatic(path.join(root, 'public_old')));
  }
};
