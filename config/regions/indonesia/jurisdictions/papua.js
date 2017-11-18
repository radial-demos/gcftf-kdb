'use strict';

module.exports = {
  id: 'papua',
  name: 'Papua',
  uriSegment: 'Papua',
  constants: {
    forestArea: { label: 'Current Forest Area', value: { amount: 260200 }, units: 'km²' },
    forestCarbon: { label: 'Total Forest Carbon', value: { amount: 3757.7765 }, units: 'M MtC' },
  },
  fields: {
    social_groups_percent: { /* Papua specific */
      labels: {
        a1: { label: 'Amungme' },
        a2: { label: 'Asmat' },
        a3: { label: 'Bauzi' },
        a4: { label: 'Dani' },
        a5: { label: 'Kamoro' },
        a6: { label: 'Kombai' },
        a7: { label: 'Korowai' },
        a8: { label: 'Mee' },
        a9: { label: 'Sentani' },
        a10: { label: 'Yali' },
        a11: { label: 'Yei' },
        a12: { label: 'Other' },
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
