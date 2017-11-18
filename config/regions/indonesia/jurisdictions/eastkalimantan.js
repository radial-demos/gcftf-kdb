'use strict';

module.exports = {
  id: 'eastkalimantan',
  name: 'East Kalimantan',
  uriSegment: 'EastKalimantan',
  localName: 'Kalimantan Timur',
  constants: {
    forestArea: { label: 'Current Forest Area', value: { amount: 62200 }, units: 'km²' },
    forestCarbon: { label: 'Total Forest Carbon', value: { amount: 933.6279 }, units: 'M MtC' },
  },
  fields: {
    social_groups_percent: { /* East Kalimantan specific */
      labels: {
        a1: { label: 'Javanese' },
        a2: { label: 'Bugis' },
        a3: { label: 'Banjarese' },
        a4: { label: 'Dayak' },
        a5: { label: 'Kutai' },
        a6: { label: 'Other' },
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
