var assert = require('assert');
var app = require('../app');
var utilities = require('../utilities/utilities');

describe('Test Countries List', function() {
  it('should return an array of country objects', function() {
    utilities.getCountries(app, function(){
      assert.equal(true, app.countries.length > 0);
    })
  });
});

describe('User', function() {
  describe('#save()', function() {
    it('error should be caught', function(done) {
      var UserData = app.db.model('userdata');
      var person = new UserData();
      person.sex = 'Male';
      person.age = 21;
      person.country = 'GBR';
      person.save(function(err) {
        if (err) done();
        throw 'document saved in error!';
      });
    });
  });
  describe('#save()', function() {
    it('should save without error', function(done) {
      var UserData = app.db.model('userdata');
      var person = new UserData();
      person.name = 'Test User';
      person.sex = 'Male';
      person.age = 21;
      person.country = 'GBR';
      person.save(function(err) {
        if (err) throw err;
        done();
      });
    });
  });
});
