'use strict';

const jurisdictions = [];
jurisdictions.push(require('./jurisdictions/amazonas'));
jurisdictions.push(require('./jurisdictions/huanuco'));
jurisdictions.push(require('./jurisdictions/loreto'));
jurisdictions.push(require('./jurisdictions/madrededios'));
jurisdictions.push(require('./jurisdictions/piura'));
jurisdictions.push(require('./jurisdictions/sanmartin'));
jurisdictions.push(require('./jurisdictions/ucayali'));

module.exports = {
  id: 'peru',
  uriSegment: 'Peru',
  name: 'Peru',
  navColumn: 3,
  currency: 'PEN',
  fields: {
    national_social_groups_percent: {
      labels: {
        a1: { label: 'Ashaninka' },
        a2: { label: 'Aguaruna' },
        a3: { label: 'Shipibo-Conibo' },
        a4: { label: 'Chayahuitas' },
        a5: { label: 'Quichuas' },
        a6: { label: 'Other' },
      },
    },
  },
  jurisdictions,
};
