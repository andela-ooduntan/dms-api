#!/usr/bin/env node

var bodyParser = require('body-parser');
var config = require('./config');
var mongoose = require('mongoose');
var express = require('express');
var dms = express();

mongoose.connect(config.database, function(err) {
  if (err) {
    console.log('Error connecting to the database');
  } else {
    console.log('Connected to the database...');
    //require('./app/command-interface/command');
  }
});

dms.use(bodyParser.json());
dms.use(bodyParser.urlencoded({ extended: true }));
dms.use(require('./server/routes'));

dms.listen(config.port, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('DMS is running');
  }
});
