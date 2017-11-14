'use strict';

const jurisdictions = [];
jurisdictions.push(require('./jurisdictions/acre'));
jurisdictions.push(require('./jurisdictions/amapa'));
jurisdictions.push(require('./jurisdictions/amazonas'));
jurisdictions.push(require('./jurisdictions/maranhao'));
jurisdictions.push(require('./jurisdictions/matogrosso'));
jurisdictions.push(require('./jurisdictions/para'));
jurisdictions.push(require('./jurisdictions/rondonia'));
jurisdictions.push(require('./jurisdictions/tocantins'));

module.exports = {
  id: 'brazil',
  uriSegment: 'Brazil',
  name: 'Brazil',
  navColumn: 0,
  currency: 'BRL',
  jurisdictions,
};
