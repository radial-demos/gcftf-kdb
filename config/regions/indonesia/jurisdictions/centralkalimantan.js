'use strict';

module.exports = {
  id: 'centralkalimantan',
  name: 'Central Kalimantan',
  uriSegment: 'CentralKalimantan',
  localName: 'Kalimantan Tengah',
  constants: {
    forestArea: { value: 80200, units: 'km²' },
    forestCarbon: { value: 1130.7401, units: 'M MtC' },
  },
  fields: {
    social_groups_percent: { /* Central Kalimantan specific */
      labels: {
        a1: { label: 'Banjarese' },
        a2: { label: 'Ngaju' },
        a3: { label: 'Javanese' },
        a4: { label: 'Dayak' },
        a5: { label: 'Bakumpai' },
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
