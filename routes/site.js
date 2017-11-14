'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:routes-site');


const models = require('../models');


module.exports = (req, res, next) => {
  const props = {};
  props.viewId = (req.params.viewId || '').toLowerCase().replace(/ |-|_/gi, '');
  if (['', 'home'].includes(props.viewId)) props.viewId = 'index';
  // const data = models.data.get({ nationId: 'brazil', jurisdictionId: 'acre' });
  // debug(data);
  res.end(JSON.stringify(props));
};
