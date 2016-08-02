#Simple Capture Form Using Node / Express / MongoDB

##About
This is a very simple application using node / Express and MongoDB that allows the capture of a single form of data.

* MongoDB connectivity is managed using [Mongoose](http://mongoosejs.com/) to implement data validation.
* Unit testing is completed with [Mocha](https://mochajs.org/)
* Remote REST calls use [Restler](https://github.com/danwrong/restler)
* UI skinning is done with [PureCSS](http://purecss.io/)

##Installation
To install:
* Clone to your local machine
* Run up a MongoDB instance on port 27017
* Run an ```npm install```
* Launch the server using ```npm start``` (or ```nodemon app```)

## Testing
To run the unit tests, install the app as above. Then run ```npm test```

##Still to do
There are many many ways to improve this basic app!

* Add client side validation to prevent a submit with invalid data, server side validation is a last resort
* Improve validation rules to prevent obviously incorrect values such as negative ages
* Improve validation to try and prevent duplicates. Maybe not possible with such a small data set
* Improve unit tests to cover more rules
* Improve UI to add admin screens to view data that has been submitted
* Add security to the MongoDB database
* Break out hard coded values (e.g. country list end point) to config settings file
