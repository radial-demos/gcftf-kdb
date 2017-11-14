'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:app');

debug('\x1Bc');

const express = require('express');
const path = require('path');

const routes = require('./routes/');

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/', routes);

module.exports = app;
