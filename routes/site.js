'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:routes-site');

const models = require('../models');
const viewDefinitions = require('../config/view-definitions');


module.exports = async (req, res, next) => {
  const props = {};
  props.viewId = (req.params.viewId || '').toLowerCase().replace(/ |-|_/gi, '');
  if (['', 'home'].includes(props.viewId)) props.viewId = 'index';
  const viewDefinition = viewDefinitions.find(r => (r.id === props.viewId));
  if (!viewDefinition) {
    throw Error(`View Not Found '${props.viewId}'`);
    // next();
    // return;
  }
  if (viewDefinition.model === 'data') {
    const dataProps = {};
    dataProps.nationId = (req.params.nationId || '').toLowerCase().replace(/ |-|_/gi, '');
    if (!dataProps.nationId) {
      throw Error('nationId not supplied');
      // next();
      // return;
    }
    if (viewDefinition.layout === 'jurisdictional') {
      dataProps.jurisdictionId = (req.params.jurisdictionId || '').toLowerCase().replace(/ |-|_/gi, '');
      if (!dataProps.jurisdictionId) {
        throw Error('jurisdictionId not supplied');
        // next();
        // return;
      }
      // include viewDefinitions for all jurisdictional views for subnavigation
      props.viewDefinitions = viewDefinitions.filter(r => (r.layout === 'jurisdictional'));
    }
    // merge dataProps into props
    Object.assign(props, dataProps);
    try {
      props.data = await models.data.get(dataProps);
    } catch (err) {
      throw Error(`Data Not Found ${JSON.stringify(dataProps)}`);
      // next();
      // return;
    }
  } else {
    try {
      props.content = await models.content.get();
    } catch (err) {
      next();
      return;
    }
  }
  res.render(props.viewId, props);
  // res.end(JSON.stringify(props));
};
