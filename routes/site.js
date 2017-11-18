'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:routes-site');

const _ = require('lodash');
const models = require('../models');
const viewDefinitions = require('../config/view-definitions');

/**
 * Mostly intended for URI segments, this function deburrs and strips out spaces, dashes, and underscors then converts to lower case
 * Resultant string is useful for comparisons and array/key searches
 * @param  {string} src source string
 * @return {string}     ID-like version of string
 */
function toId(src) {
  return _.deburr(src).replace(/ |-|_/gi, '').toLowerCase();
}

function lookupViewDefinition(reqParams = {}) {
  let id = toId(reqParams.viewId || '');
  id = (['', 'index'].includes(id)) ? 'home' : id;
  const viewDefinition = viewDefinitions.find(r => (toId(r.uriSegment) === id));
  if (!viewDefinition) {
    throw Error('INVALID_VIEW');
  }
  return viewDefinition;
}

function parseDataProps(reqParams = {}, viewDefinition) {
  const props = {};
  props.nationId = toId(reqParams.nationId || '');
  if (!props.nationId) {
    throw Error('INVALID_NATION');
  }
  if (viewDefinition.layout === 'nation') {
    return props;
  } else if (viewDefinition.layout === 'jurisdiction') {
    props.jurisdictionId = toId(reqParams.jurisdictionId || '');
    if (!props.jurisdictionId) {
      // uri may have been in the form of nationId.jurisdictionId
      // try parsing nationId and jurisdictionId this way
      [props.nationId, props.jurisdictionId] = props.nationId.split('.');
      if (!props.jurisdictionId) {
        throw Error('INVALID_JURISDICTION');
      }
    }
    return props;
  }
  throw Error(`INVALID_LAYOUT: layout for data model must be either 'nation' or jurisdiction. Found ${String(viewDefinition.layout)}`);
}

module.exports = async (req, res, next) => {
  const props = {};
  try {
    props.view = lookupViewDefinition(req.params);
  } catch (err) {
    res.error = { html: 'The page you requested does not exist. Please try using the navigation above to find the information you\'re looking for.' };
    props.view = viewDefinitions[0];
    res.status(404);
  }
  if (props.view.model === 'data') {
    const dataProps = parseDataProps(req.params, props.view);
    try {
      props.data = await models.data.get(dataProps);
    } catch (err) {
      res.error = { html: `The ${props.layout} you requested does not exist. Please try using the navigation above to find the information you're looking for.` };
      props.view = viewDefinitions[0];
      res.status(404);
    }
  }

  if (props.view.model === 'content') {
    try {
      props.content = await models.content.get();
    } catch (err) {
      throw Error(err);
    }
  }
  // include views (array) for this layout type. This is used for subnavigation (in jurisdiction layout) to other pages within the layout
  props.views = viewDefinitions.filter(r => (r.layout === props.view.layout));
  try {
    await res.render(props.view.id, props);
  } catch (err) {
    res.end(err);
  }
  // res.end(JSON.stringify(props));
};
