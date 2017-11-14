'use strict';

const jurisdictions = [];
jurisdictions.push(require('./jurisdictions/aceh'));
jurisdictions.push(require('./jurisdictions/centralkalimantan'));
jurisdictions.push(require('./jurisdictions/eastkalimantan'));
jurisdictions.push(require('./jurisdictions/northkalimantan'));
jurisdictions.push(require('./jurisdictions/westkalimantan'));
jurisdictions.push(require('./jurisdictions/papua'));
jurisdictions.push(require('./jurisdictions/westpapua'));

module.exports = {
  id: 'indonesia',
  uriSegment: 'Indonesia',
  name: 'Indonesia',
  navColumn: 1,
  currency: 'IDR',
  fields: {
    national_gdp_breakdown_percent: {
      labels: {
        a1: { label: 'Agriculture, Livestock, Forestry & Fisheries' },
        a2: { label: 'Mining & Quarrying' },
        a3: { label: 'Processing Industry' },
        a4: { label: 'Construction' },
        a5: { label: 'Trade, Hotel & Restaurant' },
        a6: { label: 'Transport & Communication' },
        a7: { label: 'Services' },
      },
    },
  },
  jurisdictions,
};
