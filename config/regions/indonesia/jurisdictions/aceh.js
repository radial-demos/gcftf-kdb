'use strict';

module.exports = {
  id: 'aceh',
  name: 'Aceh',
  uriSegment: 'Aceh',
  constants: {
    forestArea: { label: 'Current Forest Area', value: { amount: 31600 }, units: 'km²' },
    forestCarbon: { label: 'Total Forest Carbon', value: { amount: 449.3265 }, units: 'M MtC' },
  },
  fields: {
    social_groups_percent: { /* Aceh specific */
      labels: {
        a1: { label: 'Acehnese' },
        a2: { label: 'Gayo Lut' },
        a3: { label: 'Gayo Luwes' },
        a4: { label: 'Alas' },
        a5: { label: 'Singkil' },
        a6: { label: 'Simeulue' },
        a7: { label: 'Other' },
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
