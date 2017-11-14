'use strict';

const jurisdictions = [];
jurisdictions.push(require('./jurisdictions/caqueta'));

module.exports = {
  id: 'colombia',
  uriSegment: 'Colombia',
  name: 'Colombia',
  navColumn: 4,
  currency: 'COP',
  jurisdictions,
};
