'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:app');

debug('\x1Bc');

const express = require('express');
const path = require('path');

const routes = require('./routes/');

const app = express();

app.use('/', routes);

module.exports = app;
