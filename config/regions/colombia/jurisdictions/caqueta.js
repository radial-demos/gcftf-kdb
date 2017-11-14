'use strict';

module.exports = {
  id: 'caqueta',
  uriSegment: 'Caqueta',
  name: 'Caquetá',
  constants: {
    forestArea: { value: 65700, units: 'km²' },
    forestCarbon: { value: 538.29, units: 'M MtC' },
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
        '1': { label: 'Services' },
        '2': { label: 'Agriculture' },
        '3': { label: 'Forestry' },
        '4': { label: 'Industry' },
        '5': { label: 'Mining' },
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
