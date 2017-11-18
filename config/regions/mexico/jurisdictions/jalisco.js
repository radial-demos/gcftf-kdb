'use strict';

module.exports = {
  id: 'jalisco',
  uriSegment: 'Jalisco',
  name: 'Jalisco',
  constants: {
    forestArea: { label: 'Current Forest Area', value: { amount: 33680.505 }, units: 'km²' },
    forestCarbon: { label: 'Total Forest Carbon', value: { amount: 86.88 }, units: 'M MtC' },
  },
  fields: {
    gdp_breakdown_percent: {
      labels: {
        a1: { label: 'Agriculture, Forestry' },
        a2: { label: 'Industry, Mining' },
        a3: { label: 'Services' },
      },
    },
    current_forest_area_typologies: {
      labels: {
        u2017a: { label: 'Conifer Forest Primary' },
        u2017b: { label: 'Primary Encino Forest' },
        u2017c: { label: 'Primary Mesophytic Forest' },
        u2017d: { label: 'Primary Deciduous' },
        u2017e: { label: 'Primary Perrenial' },
        u2017f: { label: 'Secondary Sub-deciduous Forest' },
        u2017g: { label: 'Secondary Coniferous' },
        u2017h: { label: 'Secondary Encino Forest' },
        u2017i: { label: 'Secondary Mesophytic Foresty' },
        u2017j: { label: 'Secondary Deciduous' },
        u2017k: { label: 'Secondary Perennial Forest' },
        u2017l: { label: 'Secondary Sub-deciduous Jungle' },
      },
    },
    forest_management: {
      labels: {
        u2017a: { label: 'Ejido' },
        u2017b: { label: 'Protected Area' },
        u2017c: { label: 'Other' },
      },
    },
  },
};
