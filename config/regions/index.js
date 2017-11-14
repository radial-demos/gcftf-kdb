'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:data-definitions');
const _ = require('lodash');

const fields = {};
fields.national = require('../fields/national');
fields.jurisdictional = require('../fields/jurisdictional');

const nations = [];
nations.push(require('./brazil'));
nations.push(require('./colombia'));
nations.push(require('./indonesia'));
nations.push(require('./ivorycoast'));
nations.push(require('./mexico'));
nations.push(require('./nigeria'));
nations.push(require('./peru'));

module.exports = nations;
