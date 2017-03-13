'use strict';
var express = require('express');
var path = require('path');

var routes = require('./routes/index');
var futureValueCalculatorRoutes = require('./routes/FutureValueCalculator');

var app = express();
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/FutureValueCalculator', futureValueCalculatorRoutes);

module.exports = app;
