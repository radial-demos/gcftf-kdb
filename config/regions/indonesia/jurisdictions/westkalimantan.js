'use strict';

module.exports = {
  id: 'westkalimantan',
  name: 'West Kalimantan',
  uriSegment: 'WestKalimantan',
  localName: 'Kalimantan Barat',
  constants: {
    forestArea: { label: 'Current Forest Area', value: { amount: 61500 }, units: 'km²' },
    forestCarbon: { label: 'Total Forest Carbon', value: { amount: 872.9896 }, units: 'M MtC' },
  },
  fields: {
    social_groups_percent: { /* West Kalimantan specific */
      labels: {
        a1: { label: 'Dayak' },
        a2: { label: 'Malay' },
        a3: { label: 'Chinese' },
        a4: { label: 'Javanese' },
        a5: { label: 'Bugis' },
        a6: { label: 'Sundanese' },
        a9: { label: 'Other' },
      },
    },
    gdp_breakdown_percent: {
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
    forest_management: {
      labels: {
        unprotected_forest_area: { label: 'Unprotected Forest Area' },
        conserved_forest_area_breakdown: { label: 'Conserved Forest Area' },
        fully_protected_forest_area_breakdown: { label: 'Fully Protected Forest Area' },
        sustainably_managed_forest_area_breakdown: { label: 'Sustainably Managed Forest Area' },
      },
    },
  },
};
