'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:model-data');

const { MongoClient } = require('mongodb');
const _ = require('lodash');


const regions = require('../config/regions');
const fields = require('../config/fields');

const DB_URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}`;

const dataStructure = [];

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
function populateDataStructure() {
  regions.forEach((nation) => {
    const structureItem = _.cloneDeep(nation);
    structureItem.fields = mergeFields(fields.national, nation.fields);
    dataStructure.push(structureItem);
    if (!Array.isArray(structureItem.jurisdictions)) return;
    structureItem.jurisdictions.forEach((jurisdiction) => {
      jurisdiction.fields = mergeFields(fields.jurisdictional, jurisdiction.fields);``
    });
  });
}
function assertValidProps(props) {
  // nationId is required and must be a string of non-zero length
  if (!Object.prototype.hasOwnProperty.call(props, 'nationId')) {
    throw Error('Missing \'nationId\' property. This property must be specified.');
  }
  if (typeof props.nationId !== 'string') {
    throw Error('Non-string \'nationId\' value. The value of this property must be a string.');
  }
  if (!props.nationId.length) {
    throw Error('Empty \'nationId\' value. The value of this property must be a non zero length string.');
  }
  // jurisdictionId is optional (and may cast to false)
  if (!props.jurisdictionId) {
    return true;
  }
  // if jurisdictionId is specified, it must be a string
  if (typeof props.jurisdictionId !== 'string') {
    throw Error('Non-string \'jurisdictionId\' value. The value of this property must be a string.');
  }
  return true;
}
/**
 * use 'dataFramework' with values merged from the database to return an object with all data entry definitions populated with values
 * @param  {object} props key/value pairs specifying 'nationId' (required) and (optional) 'jurisdictionId'
 * @return {object}       All information (including field definitions and values) for requested nation or jurisdiction
 */
async function get(props) {
  assertValidProps(props);
  let structureItem = dataStructure.find(r => (r.id === props.nationId));
  if (!structureItem) {
    throw Error(`Nation not found. No nation with the id '${props.nationId}' has been defined in 'config/regions'.`);
  }
  if (props.jurisdictionId) {
    // try to find jurisdiction
    if (!Array.isArray(structureItem.jurisdictions)) {
      throw Error(`Jurisdiction not found. No jurisdiction within the nation '${props.nationId}' and with the id '${props.jurisdictionId}' has been defined in 'config/regions'.`);
    }
    structureItem = structureItem.jurisdictions.find(r => (r.id === props.jurisdictionId));
    if (!structureItem) {
      throw Error(`Jurisdiction not found. No jurisdiction within the nation '${props.nationId}' and with the id '${props.jurisdictionId}' has been defined in 'config/regions'.`);
    }
  }
  // merge data values from database into each field defined in the structure
  const db = await MongoClient.connect(DB_URL);
  const data = await db.collection('data').find().toArray();
  await db.close();
  // debug(data.length);
  return structureItem;
}

populateDataStructure();

module.exports = { get };
