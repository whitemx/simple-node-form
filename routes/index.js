var express = require('express');
var router = express.Router();
var userdatamodel = require('../schema/UserData');
var utilities = require('../utilities/utilities');

/* GET home page. */
router.get('/', function(req, res, next) {
  utilities.getCountries(req.app, function(){
    res.render('index', {
      data: {},
      countries: req.app.countries
    });
  })
});

router.post('/', function(req, res, next) {
  var UserData = req.app.db.model('userdata');
  var body = req.body;
  var person = new UserData();
  person.name = req.body.name;
  person.sex = req.body.sex;
  person.age = req.body.age;
  person.country = req.body.country;
  person.save(function (err) {
    if (err){
      //We've got at least one error, let's show it to the user
      var errors = [];
      if (err.errors.name){
        errors.push(err.errors.name.message);
      }
      if (err.errors.sex){
        errors.push(err.errors.sex.message);
      }
      if (err.errors.age){
        errors.push(err.errors.age.message);
      }
      if (err.errors.country){
        errors.push(err.errors.country.message);
      }
      res.render('index', {
        data: req.body,
        countries: req.app.countries,
        errors: errors
      });
    }else{
      //We've saved successfully redirect the user
      var name = req.body.name;
      if (name.indexOf(" ") > -1){
        name = name.split(" ")[0];
      }
      res.render('success', {
        name: name
      })
    }
  });
})

module.exports = router;
