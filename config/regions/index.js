'use strict';

require('dotenv').config();
const debug = require('debug')('kdb:data-definitions');
const _ = require('lodash');

const fields = {};
fields.national = require('../fields/national');
fields.jurisdictional = require('../fields/jurisdictional');

const regions = [];
regions.push(require('./brazil'));
regions.push(require('./colombia'));
regions.push(require('./indonesia'));
regions.push(require('./ivorycoast'));
regions.push(require('./mexico'));
regions.push(require('./nigeria'));
regions.push(require('./peru'));

// const definitions = {};

// function mergeFields(overrides, defaultsArg) {
//   const defaults = _.cloneDeep(defaultsArg);
//   if (!overrides) return defaults;
// };

// nationDefs.forEach((nationDef) => {
//   nationDef.fields = mergeFields(nationDef.fields, fields.national);
  // if (Object.prototype.hasOwnProperty.call(nationDef, 'fields')) {
  //   Object.keys(nationDef.fields).forEach((fieldKey) => {
  //     if (!Object.prototype.hasOwnProperty.call(definitions[nationKey].fields, fieldKey)) {
  //       debug(`WARNING: Override field is not defined in structure file and will be ignored. (nation: ${nationDef.id}, field: ${fieldKey})`);
  //       return;
  //     }
  //     const fieldObj = nationObj.fields[fieldKey];
  //     if (Object.prototype.hasOwnProperty.call(fieldObj, 'labels')) {
  //       definitions[nationKey].fields[fieldKey].labels = _.cloneDeep(fieldObj.labels);
  //     }
  //   });
  // }
  // if (Object.prototype.hasOwnProperty.call(nationObj, 'jurisdictions')) {
  //   definitions[nationKey].jurisdictions = {};
  //   Object.keys(nationObj.jurisdictions).forEach((jurisdictionKey) => {
  //     const jurisdictionObj = nationObj.jurisdictions[jurisdictionKey];
  //     definitions[nationKey].jurisdictions[jurisdictionKey] = _.cloneDeep(jurisdictionObj);
  //     definitions[nationKey].jurisdictions[jurisdictionKey].fields = _.cloneDeep(fields.jurisdictional);
  //     if (Object.prototype.hasOwnProperty.call(jurisdictionObj, 'fields')) {
  //       Object.keys(jurisdictionObj.fields).forEach((fieldKey) => {
  //         if (!Object.prototype.hasOwnProperty.call(definitions[nationKey].jurisdictions[jurisdictionKey].fields, fieldKey)) {
  //           debug(`WARNING: Override field is not defined in structure file and will be ignored. (nation: ${nationKey}, jurisdiction: ${jurisdictionKey}, field: ${fieldKey})`);
  //           return;
  //         }
  //         const fieldObj = jurisdictionObj.fields[fieldKey];
  //         if (Object.prototype.hasOwnProperty.call(fieldObj, 'labels')) {
  //           definitions[nationKey].jurisdictions[jurisdictionKey].fields[fieldKey].labels = _.cloneDeep(fieldObj.labels);
  //         }
  //       });
  //     }
  //   });
  // }
//   debug();
// });


module.exports = regions;
