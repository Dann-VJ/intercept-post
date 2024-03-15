"use strict";

var express = require('express');
var noteSchema = require('../models/note');
var note = require('../models/note');
var router = express.Router();

//Crear note
router.post('/note', function (req, res) {
  var note = noteSchema(req.body);
  note.save().then(function (data) {
    return res.json(data);
  })["catch"](function (error) {
    return res.json({
      message: error
    });
  });
});
//Obtener note
router.get('/note', function (req, res) {
  noteSchema.find().then(function (data) {
    return res.json(data);
  })["catch"](function (error) {
    return res.json({
      message: error
    });
  });
});

//Exportar el modulo
module.exports = router;