'use strict';

module.exports = {
  id: 'crossriverstate',
  uriSegment: 'CrossRiverState',
  name: 'Cross River State',
  constants: {
    forestArea: { label: 'Current Forest Area', value: { amount: 2070.28 }, units: 'km²' },
    forestCarbon: { label: 'Total Forest Carbon', value: { amount: 15.97 }, units: 'M MtC' },
  },
  fields: {
    social_groups_percent: {
      labels: {
        a1: { label: 'Efik' },
        a2: { label: 'Ekoi' },
        a3: { label: 'Ejagham' },
        a4: { label: 'Bako' },
        a5: { label: 'Bete' },
        a6: { label: 'Boki' },
        a7: { label: 'Mbembe' },
        a8: { label: 'Other' },
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
        u2017a: { label: 'Settlement' },
        u2017b: { label: 'Oil palm, Rubber' },
        u2017c: { label: 'Farmland' },
        u2017d: { label: 'Tropical High Forest' },
        u2017e: { label: 'Open Forest' },
        u2017f: { label: 'Montane Forest' },
        u2017g: { label: 'Gmelina' },
        u2017h: { label: 'Derived Savannah' },
        u2017i: { label: 'Grazing Field' },
        u2017j: { label: 'Mangrove' },
        u2017k: { label: 'Swamp' },
        u2017l: { label: 'Waterbody' },
      },
    },
    forest_management: {
      labels: {
        management_national: { label: 'National Conservation Areas' },
        management_state: { label: 'State Forest Reserves' },
        management_community: { label: 'Community Forest Estates' },
      },
    },
  },
};
