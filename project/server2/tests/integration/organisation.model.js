'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var config = require('../../config/environments/test');

describe('Organisation model', function() {
  var mongoose;
  var Organisation;
  var _organisation;
  var newOrganisationData = {
    name: 'Test organisation'
  };

  before(function(done) {
    mongoose = require('../../config/mongoose').init();
    Organisation = require('../../app/models/organisation');
    neOrganisationData.owner = mongoose.Types.ObjectId();
    newOrganisationData.members = [mongoose.Types.ObjectId()];

    done();
  });

  after(function(done) {
    Organisation.remove({}).exec(function(err) {
      if (err) throw err;

      mongoose.connection.close(function() {
        setTimeout(function() { done(); }, 1000);
      });
    });
  });

  it('should create a new organisation', function(done) {
    Organisation.create(newOrganisationData, function(err, organisation) {
      if (err) throw err;

      should.exist(organisation);
      should.exist(organisation.createdAt);
      organisation.name.should.equal(newOrganisationData.name);
      organisation.members[0].toString().should.equal(newOrganisationData.members[0].toString());
      organisation.owner.toString().should.equal(newOrganisationData.owner.toString());
     

      _organisation= organisation;
      done();
    });
  });

  it('should update an existing organisation', function(done) {
    Organisation.findOne({ _id: _organisation._id }, function(err, organisation) {
      if (err) throw err;

      organisation.name = 'New organisation name';
      organisation.save(function(err) {
        if (err) throw err;

        should.exist(organisation);
        should.exist(organisation.createdAt);
        organisation.name.should.equal('New organisation name');
        organisation.members[0].toString().should.equal(newOrganisationData.members[0].toString());
        organisation.owner.toString().should.equal(newOrganisationData.owner.toString());
       

        done();
      });
    });
  });
});
