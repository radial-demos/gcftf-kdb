'use strict';

const jurisdictions = [];
jurisdictions.push(require('./jurisdictions/belier'));
jurisdictions.push(require('./jurisdictions/cavally'));

module.exports = {
  id: 'ivorycoast',
  uriSegment: 'IvoryCoast',
  name: 'Ivory Coast',
  localName: 'Côte d\'Ivoire',
  navColumn: 4,
  currency: 'CFA Fran',
  jurisdictions,
};
