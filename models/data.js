'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:model-data');

const _ = require('lodash');

const regions = require('../config/regions');
const fields = require('../config/fields');

let dataFramework;

/**
 * Use default field definitions as a base object, but override 'label' object with corresponding 'label' object from overrides
 * @param  object defaults  key-object pairs defining field definitions
 * @param  object overrides key-object pairs defining field definitions to be sued to override the defaults. ONLY THE 'label' OBJECT IS OVERRIDDEN
 * @return object           clone of 'defaults' with any 'label' object replaced with corresponding 'label' object from overrides
 */
function mergeFields(defaults, overrides) {
  const fieldsCopy = _.cloneDeep(defaults);
  if (!overrides) return fields;
  Object.keys(fieldsCopy).forEach((fieldId) => {
    const field = fieldsCopy[fieldId];
    const override = overrides[fieldId];
    if (!override) return;
    if (override.labels) {
      field.labels = override.labels;
    } else if (override.options) {
      field.options = override.options;
    }
  });
  return fieldsCopy;
}
/**
 * Use regions (nation definitions with member jurisdiction definitions) and assign 'fields' (either national or regional) for each
 * @return {object} clone of 'regions' with 'fields' object assigned to each nation and jurisdiction
 */
function getDataFramework() {
  const framework = [];
  regions.forEach((region) => {
    const frameworkItem = _.cloneDeep(region);
    frameworkItem.fields = mergeFields(fields.national, region.fields);
    framework.push(frameworkItem);
    if (!Array.isArray(frameworkItem.jurisdictions)) return;
    frameworkItem.jurisdictions.forEach((jurisdiction) => {
      jurisdiction.fields = mergeFields(fields.jurisdictional, jurisdiction.fields);
    });
  });
  return framework;
}
/**
 * use 'dataFramework' with values merged from the database to return an object with all data entry definitions populated with values
 * @param  {object} props key/value pairs specifying 'nationId' (required) and (optional) 'jurisdictionId'
 * @return {object}       All information (including field definitions and values) for requested nation or jurisdiction
 */
function get(props) {
  if (!Object.prototype.hasOwnProperty.call(props, 'nationId')) {
    throw Error('Missing \'nationId\' property. This property must be specified.');
  }
  if (typeof props.nationId !== 'string') {
    throw Error('Non-string \'nationId\' value. The value of this property must be a string.');
  }
  if (!props.nationId.length) {
    throw Error('Empty \'nationId\' value. The value of this property must be a non zero length string.');
  }
  return dataFramework;
}

dataFramework = getDataFramework();

module.exports = { get };
