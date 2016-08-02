'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Define the schema for the userdata collection, with validation applied
var userdataSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
      },
    sex: {
        type: String,
        required: [true, 'Please enter your sex']
      },
    age: {
        type: Number,
        required: [true, 'Please enter your age']
      },
    country: {
        type: String,
        required: [true, 'Please select your country']
      },
    dateCreated: { type: Date, default: Date.now }
});

userdataSchema.post('save', function (doc) {
  console.log('this fired after a document was saved');
});

module.exports = mongoose.model('userdata', userdataSchema, 'userdata');
