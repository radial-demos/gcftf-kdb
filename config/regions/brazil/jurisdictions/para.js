'use strict';

module.exports = {
  id: 'para',
  name: 'Pará',
  uriSegment: 'Para',
  constants: {
    forestArea: { label: 'Current Forest Area', value: { amount: 866200 }, units: 'km²' },
    forestCarbon: { label: 'Total Forest Carbon', value: { amount: 10466.9 }, units: 'M MtC' },
  },
  fields: {
    social_groups_percent: {
      labels: {
        a1: { label: 'Multi-ethnic' },
        a2: { label: 'White' },
        a3: { label: 'Black' },
        a4: { label: 'Indigenous' },
        a6: { label: 'Other' },
      },
    },
    gdp_breakdown_percent: {
      labels: {
        a1: { label: 'Services' },
        a2: { label: 'Agriculture, Forestry' },
        a4: { label: 'Industry' },
        a5: { label: 'Mining' },
      },
    },
    current_forest_area_typologies: {
      labels: {
        u2017a: { label: 'Agriculture' },
        u2017b: { label: 'Forest' },
        u2017c: { label: 'Pastureland' },
        u2017d: { label: 'Secondary Vegetation' },
        u2017e: { label: 'Other Land Uses' },
      },
    },
    forest_management: {
      labels: {
        u2017a: { label: 'Protected' },
        u2017b: { label: 'Unprotected' },
      },
    },
  },
};
