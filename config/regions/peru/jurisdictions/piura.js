'use strict';

module.exports = {
  id: 'piura',
  uriSegment: 'Piura',
  name: 'Piura',
  constants: {
    forestArea: { value: 400, units: 'km²' },
    forestCarbon: { value: 1.2, units: 'M MtC' },
  },
  fields: {
    social_groups_percent: {
      labels: {
        a1: { label: 'Amarakaeri' },
        a2: { label: 'Matsiguenga' },
        a3: { label: 'Ese\'eja' },
        a4: { label: 'Piro' },
        a5: { label: 'Shipibo Konibo' },
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
        u2017a: { label: 'Non-Forested Areas' },
        u2017b: { label: 'Hill Forests' },
        u2017c: { label: 'Mountain Forests' },
        u2017d: { label: 'Terrace Forests' },
        u2017e: { label: 'Flooded Forests' },
        u2017f: { label: 'Waterways' },
        u2017g: { label: 'Other Land Uses' },
      },
    },
    forest_management: {
      labels: {
        u2017a: { label:	'Private Conservation Areas' },
        u2017b: { label:	'Areas of Regional Conservation' },
        u2017c: { label:	'National Protected Natural Areas' },
        u2017d: { label:	'Concessions for conservation' },
        u2017e: { label:	'Forestry concessions' },
        u2017f: { label:	'Regional areas for conservation and recovery purposes (ZOCRES)' },
        u2017g: { label:	'Native titled communities' },
        u2017h: { label:	'No forest management category / Other holding categories' },
      },
    },
  },
};
