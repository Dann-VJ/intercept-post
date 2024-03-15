"use strict";

var mongoose = require('mongoose');
var noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Note', noteSchema);