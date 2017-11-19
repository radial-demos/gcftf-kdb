'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:model-data');

debug('\x1Bc');

const { MongoClient } = require('mongodb');
const _ = require('lodash');


const regionDefs = require('../config/regions');
const fieldDefs = require('../config/fields');
const calcDefs = require('../config/calculations');

const DB_URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}`;

const dataStructure = [];

/**
 * Use default field definitions as a base object, but override 'label' object with corresponding 'label' object from overrides
 * Also convert fieldDefs from an object keyed on id to an array (with an id property)
 * @param  object defaults  key-object pairs defining field definitions
 * @param  object overrides key-object pairs defining field definitions to be sued to override the defaults. ONLY THE 'label' OBJECT IS OVERRIDDEN
 * @return object           clone of 'defaults' with any 'label' object replaced with corresponding 'label' object from overrides
 */
function mergeFields(defaults, overrides = {}) {
  const fieldsCopy = {};
  Object.keys(defaults).forEach((fieldId) => {
    const fieldDef = _.cloneDeep(defaults[fieldId]);
    fieldDef.id = fieldId; // include the key as an id
    fieldsCopy[fieldId] = fieldDef;
    const override = overrides[fieldId];
    if (!override) return;
    if (override.labels) {
      fieldDef.labels = override.labels;
      // overrides are sometimes specified as key value pairs. Convert these to array with key as id property
      if (!Array.isArray(fieldDef.labels)) {
        fieldDef.labels = Object.entries(fieldDef.labels).map(([id, obj]) => Object.assign(obj, { id }));
      }
    } else if (override.options) {
      fieldDef.options = override.options;
    }
  });
  return fieldsCopy;
}
/**
 * Use regionDefs (nation definitions with member jurisdiction definitions) and assign 'fieldDef' (either national or regional) for each
 * @return {object} clone of 'regionDef' with 'fields' object assigned to each nation and jurisdiction
 */
function populateDataStructure() {
  regionDefs.forEach((nation) => {
    const structureItem = _.cloneDeep(nation);
    structureItem.fields = mergeFields(fieldDefs.nation, nation.fields);
    dataStructure.push(structureItem);
    if (!Array.isArray(structureItem.jurisdictions)) return;
    structureItem.jurisdictions.forEach((jurisdiction) => {
      jurisdiction.fields = mergeFields(fieldDefs.jurisdiction, jurisdiction.fields);
    });
  });
}
function getDefaultValueAttributes(fieldType) {
  const obj = {
    citation: { html: '' },
    timestamp: ''
  };
  switch (fieldType) {
    case 'KDBText':
      obj.value = { html: '' };
      break;
    case 'KDBString':
      obj.value = { string: '' };
      break;
    case 'KDBNumber':
      obj.value = { amount: null };
      break;
    case 'KDBNumberAndCurrency':
      obj.value = { amount: null, currency: '' };
      break;
    case 'KDBNumberAndYear':
      obj.value = { amount: null, year: '' };
      break;
    case 'KDBSelect':
      obj.value = { index: null };
      break;
    case 'KDBSeries':
      obj.values = [];
      break;
    case 'KDBPerson':
      obj.value = {
        firstName: { string: '' },
        lastName: { string: '' },
        email: { string: '' },
        companyTitle: { string: '' },
      };
      break;
    case '[KDBInitiative]':
      // {
      //   name: { string: row.name },
      //   description: { html: row.description.html },
      //   partners: { string: row.partners },
      //   fundingSource: { string: row.fundingSource },
      //   fundingAmount: { string: row.fundingAmount.string },
      //   initiativeType: { string: row.initiativeType },
      //   initiativeStatus: { string: row.initiativeStatus },
      // }
      break;
    default:
      debug(`Invalid field type '${fieldType}'`);
      break;
  }
  return obj;
}
function getValueAttributes(field, fieldValueRecs = []) {
  if (!Array.isArray(fieldValueRecs) || !fieldValueRecs.length) {
    return getDefaultValueAttributes(field.type);
  }
  const obj = {
    timestamp: fieldValueRecs[0].timestamp || '',
  };
  if (fieldValueRecs[0].citation) {
    obj.citation = fieldValueRecs[0].citation;
  }
  switch (field.type) {
    case 'KDBText':
      obj.value = fieldValueRecs[0].value;
      break;
    case 'KDBString':
      obj.value = fieldValueRecs[0].value;
      break;
    case 'KDBNumber':
      obj.value = fieldValueRecs[0].value;
      break;
    case 'KDBNumberAndCurrency':
      obj.value = fieldValueRecs[0].value;
      break;
    case 'KDBNumberAndYear':
      obj.value = fieldValueRecs[0].value;
      break;
    case 'KDBSelect':
      obj.value = fieldValueRecs[0].value;
      break;
    case 'KDBSeries':
      obj.values = fieldValueRecs[0].values;
      break;
    case 'KDBPerson':
      obj.value = fieldValueRecs[0].value;
      break;
    case '[KDBInitiative]':
      // {
      //   name: { string: row.name },
      //   description: { html: row.description.html },
      //   partners: { string: row.partners },
      //   fundingSource: { string: row.fundingSource },
      //   fundingAmount: { string: row.fundingAmount.string },
      //   initiativeType: { string: row.initiativeType },
      //   initiativeStatus: { string: row.initiativeStatus },
      // }
      break;
    default:
      debug(`Invalid field type '${field.type}'`);
      break;
  }
  return obj;
}
async function getValueRecs(filterSpec) {
  try {
    const db = await MongoClient.connect(DB_URL);
    const valueRecs = await db.collection('data').find(filterSpec).toArray();
    await db.close();
    return valueRecs;
  } catch (err) {
    throw err;
  }
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
function getCalculations(defs, data) {
  const calculations = {};
  Object.entries(defs).forEach(([calcId, calcObj]) => {
    calculations[calcId] = {};
    Object.entries(calcObj).forEach(([fieldKey, fieldObj]) => {
      if ((typeof fieldObj) === 'function') {
        calculations[calcId][fieldKey] = fieldObj(data);
      } else {
        calculations[calcId][fieldKey] = _.cloneDeep(fieldObj);
      }
    });
  });
  return calculations;
}
async function getData(props, structureItem) {
  const filterSpec = { nationId: props.nationId };
  if (props.jurisdictionId) filterSpec.jurisdictionId = props.jurisdictionId;
  const valueRecs = await getValueRecs(filterSpec);
  const structureWithValues = _.cloneDeep(structureItem);
  if (filterSpec.jurisdictionId) {
    // this is just a jurisdiction -- only the jurisdiction is processed
    if (!structureWithValues.fields) return structureWithValues; // early return OK
    Object.entries(structureWithValues.fields).forEach(([, fieldObj]) => {
      const fieldValueRecs = valueRecs.filter(r => (r.fieldId === fieldObj.id));
      Object.assign(fieldObj, getValueAttributes(fieldObj, fieldValueRecs));
      if (fieldObj.type === 'KDBSeries') {
        if (!Array.isArray(fieldObj.labels)) return;
        fieldObj.labels.forEach((labelObj) => {
          const valueEntry = fieldObj.values.find(r => (r.id === labelObj.id));
          if (!valueEntry) {
            labelObj.amount = null;
            return;
          }
          labelObj.amount = valueEntry.amount;
        });
      }
    });
    return { jurisdiction: structureWithValues };
  }
  // this is a nation -- nation must be processed and each child object in jurisdictions must be processed
  if (structureWithValues.fields) { // NO EARLY RETURN (jurisdictions must be processed too!)
    const nationValueRecs = valueRecs.filter(r => (!r.jurisdictionId));
    Object.entries(structureWithValues.fields).forEach(([, fieldObj]) => {
      const fieldValueRecs = nationValueRecs.filter(r => (r.fieldId === fieldObj.id));
      Object.assign(fieldObj, getValueAttributes(fieldObj, fieldValueRecs));
      if (fieldObj.type === 'KDBSeries') {
        if (!Array.isArray(fieldObj.labels)) return;
        fieldObj.labels.forEach((labelObj) => {
          const valueEntry = fieldObj.values.find(r => (r.id === labelObj.id));
          if (!valueEntry) {
            labelObj.amount = null;
            return;
          }
          labelObj.amount = valueEntry.amount;
        });
      }
    });
  }
  // now process each jurisdiction
  if (!Array.isArray(structureWithValues.jurisdictions)) return structureWithValues; // early return OK
  structureWithValues.jurisdictions.forEach((jurisdiction) => {
    if (!jurisdiction.fields) return;
    const jurisdictionValueRecs = valueRecs.filter(r => (r.jurisdictionId === jurisdiction.id));
    Object.entries(jurisdiction.fields).forEach(([, fieldObj]) => {
      const fieldValueRecs = jurisdictionValueRecs.filter(r => (r.fieldId === fieldObj.id));
      Object.assign(fieldObj, getValueAttributes(fieldObj, fieldValueRecs));
    });
  });
  return { nation: structureWithValues };
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
  const data = await getData(props, structureItem);
  // perform calculations
  if (data.nation) {
    data.nation.calculations = getCalculations(calcDefs.nation, data);
  } else if (data.jurisdiction) {
    data.jurisdiction.calculations = getCalculations(calcDefs.jurisdiction, data);
  }
  return data;
}

populateDataStructure();

module.exports = { get };
