'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:app');

debug('\x1Bc');

const models = require('./models');

const data = models.data.get({ nationId: 'brazil', jurisdictionId: 'acre' });

debug(data);

// models.content.get({ view })
