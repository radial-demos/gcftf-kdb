'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:data-definitions');

const nations = [];
nations.push(require('./brazil'));
nations.push(require('./colombia'));
nations.push(require('./indonesia'));
nations.push(require('./ivorycoast'));
nations.push(require('./mexico'));
nations.push(require('./nigeria'));
nations.push(require('./peru'));

/**
 * include some nation (parent) properties in each jurisdiction (child)
 */
nations.forEach((nation) => {
  if (!Array.isArray(nation.jurisdictions)) return;
  nation.jurisdictions.forEach((jurisdiction) => {
    jurisdiction.nationId = nation.id;
    jurisdiction.nationName = nation.name;
    jurisdiction.nationUriSegment = nation.uriSegment;
    jurisdiction.currency = nation.currency;
  });
});

module.exports = nations;
