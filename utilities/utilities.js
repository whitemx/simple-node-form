var restler = require('restler');

module.exports.getCountries = function(app, callback){
  if (app.countries){
    callback();
  }else{
    restler.get(
      "https://restcountries.eu/rest/v1/region/Europe"
    ).on('complete', function(countries) {
      console.log("Got Countries List");
      app.countries = countries;
      callback();
    })
  }
}
