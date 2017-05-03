'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

var http = require('http');
var request = require('request');
var chai = require('chai');
var mongoose = require('mongoose');
var app = require('../../server');
var userFixture = require('../fixtures/user');
var should = chai.should();
var config = app.get('config');
var baseUrl = config.baseUrl;
var User = mongoose.model('User');
var Event = mongoose.model('Event');
var appServer;

describe('Event', function() {

  before(function(done) {
    appServer = http.createServer(app);

    appServer.on('listening', function() {
      Event.create(orgfi, function(err, org) {
        if (err) throw err;

        // authenticate the user
        request({
          method: 'POST',
          url: baseUrl + '/events',
        //   form: {
        //     'email': userFixture.email,
        //     'password': 'P@ssw0rd!'
        //   },
          json:true
        }, function(err, res, body) {
          if (err) throw err;

          res.statusCode.should.equal(200);
          done();
        });

      });
    });

    appServer.listen(config.port);
  });
//after close the server
  after(function(done) {
    appServer.on('close', function() {
      done();
    });
//close mongo
    mongoose.connection.db.dropDatabase(function(err) {
      if (err) throw err;

      appServer.close();
    });
  });

  afterEach(function(done){
    Event.remove({}, function(err) {
      if (err) throw err;

      done();
    });
  });

  it('should create a new org', function(done) {
    request({
      method: 'POST',
      url: baseUrl + '/Events',
    //   form: {
    //     'email': 'jane.doe@test.com',
    //     'name': 'Jane Doe'
    //   },
      json:true
    }, function(err, res, body) {
      if (err) throw err;

      res.statusCode.should.equal(201);
    //   body.email.should.equal('jane.doe@test.com');
    //   body.name.should.equal('Jane Doe');
      done();
    });
  });

});



/**
 * JOB TEST = EVENT TEST
 */