'use strict';

const jurisdictions = [];
jurisdictions.push(require('./jurisdictions/crossriverstate'));

module.exports = {
  id: 'nigeria',
  uriSegment: 'Nigeria',
  name: 'Nigeria',
  navColumn: 4,
  currency: 'NGN',
  fields: {
    national_social_groups_percent: {
      labels: {
        a1: { label: 'Hausa and Fulani' },
        a2: { label: 'Yoruba' },
        a3: { label: 'Igbo (Ibo)' },
        a4: { label: 'Ijaw' },
        a5: { label: 'Kanuri' },
        a6: { label: 'Ibibio' },
        a7: { label: 'Tiv' },
        a8: { label: 'Other' },
      },
    },
  },
  jurisdictions,
};
