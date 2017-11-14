'use strict';

const jurisdictions = [];
jurisdictions.push(require('./jurisdictions/campeche'));
jurisdictions.push(require('./jurisdictions/chiapas'));
jurisdictions.push(require('./jurisdictions/jalisco'));
jurisdictions.push(require('./jurisdictions/quintanaroo'));
jurisdictions.push(require('./jurisdictions/tabasco'));
jurisdictions.push(require('./jurisdictions/yucatan'));

module.exports = {
  id: 'mexico',
  uriSegment: 'Mexico',
  name: 'Mexico',
  navColumn: 2,
  currency: 'MXN',
  fields: {
    national_social_groups_percent: {
      labels: {
        a1: { label: 'Mestizo' },
        a8: { label: 'Indigenous' },
        a9: { label: 'Others' },
      },
    },
    national_gdp_breakdown_percent: {
      labels: {
        a1: { label: 'Agriculture,Forestry' },
        a2: { label: 'Industry, Mining' },
        a3: { label: 'Services' },
      },
    },
  },
  jurisdictions,
};
