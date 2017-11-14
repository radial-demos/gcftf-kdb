'use strict';

module.exports = {
  national_population: {
    type: 'KDBNumber',
    label: 'Population of Country',
    numberFormat: ',',
  },
  national_gdp: {
    type: 'KDBCurrency',
    label: 'Country GDP',
    numberFormat: ',',
  },
  national_per_capita_income: {
    type: 'KDBCurrency',
    label: 'Annual Per Capita Income',
    numberFormat: ',.0f',
  },
  national_human_development_index: {
    type: 'KDBNumber',
    label: 'Human Development Index',
    numberFormat: '.3f',
  },
  national_land_area: {
    type: 'KDBNumber',
    label: 'Total Land Area',
    numberFormat: ',.0f',
    units: 'km²',
  },
  national_percent_forested: {
    type: 'KDBNumber',
    label: '% of Land That Is Forest',
    numberFormat: '.2f',
    units: '%',
  },
  national_main_exports: {
    type: 'KDBString',
    label: 'Main Exports',
  },
  national_social_groups_percent: {
    type: 'KDBSeries',
    label: 'Ethnic Groups',
    seriesLabel: 'Group',
    numberFormat: '.2f',
    units: '%',
    isPercent: true,
    isSorted: true,
    labels: {
      a1: { label: 'Multi-ethnic' },
      a2: { label: 'White' },
      a3: { label: 'Black' },
      a4: { label: 'Indigenous' },
      a6: { label: 'Other' },
    },
  },
  national_urban_vs_rural_population_percent: {
    type: 'KDBSeries',
    label: 'Urban vs. Rural Population',
    seriesLabel: 'Type',
    numberFormat: '.2f',
    units: '%',
    isSorted: true,
    isPercent: true,
    labels: {
      '1': { label: 'Urban' },
      '2': { label: 'Rural' },
    },
  },
  national_gdp_breakdown_percent: {
    type: 'KDBSeries',
    label: 'GDP Breakdown',
    seriesLabel: 'Type',
    numberFormat: '.2f',
    units: '%',
    isSorted: true,
    isPercent: true,
    labels: {
      '1': { label: 'Agriculture' },
      '2': { label: 'Industry' },
      '3': { label: 'Services' },
      '4': { label: 'Forestry' },
      '5': { label: 'Mining' },
    },
  },
  national_deforestation_rate: {
    type: 'KDBSeries',
    label: 'Deforestation Rates',
    seriesLabel: 'Year',
    numberFormat: ',.0f',
    units: 'km²',
    labels: {
      '2000': {
        oldID: '0',
        label: '2000',
      },
      '2001': {
        oldID: '1',
        label: '2001',
      },
      '2002': {
        oldID: '2',
        label: '2002',
      },
      '2003': {
        oldID: '3',
        label: '2003',
      },
      '2004': {
        oldID: '4',
        label: '2004',
      },
      '2005': {
        oldID: '5',
        label: '2005',
      },
      '2006': {
        oldID: '6',
        label: '2006',
      },
      '2007': {
        oldID: '7',
        label: '2007',
      },
      '2008': {
        oldID: '8',
        label: '2008',
      },
      '2009': {
        oldID: '9',
        label: '2009',
      },
      '2010': {
        oldID: '10',
        label: '2010',
      },
      '2011': {
        oldID: '11',
        label: '2011',
      },
      '2012': {
        oldID: '12',
        label: '2012',
      },
      '2013': {
        oldID: '13',
        label: '2013',
      },
      '2014': {
        oldID: '14',
        label: '2014',
      },
      '2015': {
        oldID: '15',
        label: '2015',
      },
      '2016': {
        oldID: '16',
        label: '2016',
      },
    },
  },
  txt_laws: {
    type: 'KDBText',
    label: 'Laws',
  },
  txt_policies_and_plans: {
    type: 'KDBText',
    label: 'Policies and Plans',
  },
  txt_institutions: {
    type: 'KDBText',
    label: 'Institutions',
  },
  deforestationTrend: {
    type: 'KDBNumberAndYear',
    label: 'Deforestation Trend',
    numberFormat: '+,.1f',
    units: '%',
    isDerived: true,
  },
};
