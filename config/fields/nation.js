'use strict';

module.exports = {
  national_population: {
    type: 'KDBNumber',
    label: 'Population of Country',
    numberFormat: ',',
  },
  national_gdp: {
    type: 'KDBNumberAndCurrency',
    label: 'Country GDP',
    numberFormat: ',',
  },
  national_per_capita_income: {
    type: 'KDBNumberAndCurrency',
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
    label: '% of Land that is Forest',
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
    labels: [
      { id: 'a1', label: 'Multi-ethnic' },
      { id: 'a2', label: 'White' },
      { id: 'a3', label: 'Black' },
      { id: 'a4', label: 'Indigenous' },
      { id: 'a6', label: 'Other' },
    ],
  },
  national_urban_vs_rural_population_percent: {
    type: 'KDBSeries',
    label: 'Urban vs. Rural Population',
    seriesLabel: 'Type',
    numberFormat: '.2f',
    units: '%',
    isSorted: true,
    isPercent: true,
    labels: [
      { id: '1', label: 'Urban' },
      { id: '2', label: 'Rural' },
    ],
  },
  national_gdp_breakdown_percent: {
    type: 'KDBSeries',
    label: 'GDP Breakdown',
    seriesLabel: 'Type',
    numberFormat: '.2f',
    units: '%',
    isSorted: true,
    isPercent: true,
    labels: [
      { id: '1', label: 'Agriculture' },
      { id: '2', label: 'Industry' },
      { id: '3', label: 'Services' },
      { id: '4', label: 'Forestry' },
      { id: '5', label: 'Mining' },
    ],
  },
  national_deforestation_rate: {
    type: 'KDBSeries',
    label: 'Deforestation Rates',
    seriesLabel: 'Year',
    numberFormat: ',.0f',
    units: 'km²',
    labels: [
      {
        id: '2000',
        oldId: '0',
        label: '2000',
      },
      {
        id: '2001',
        oldId: '1',
        label: '2001',
      },
      {
        id: '2002',
        oldId: '2',
        label: '2002',
      },
      {
        id: '2003',
        oldId: '3',
        label: '2003',
      },
      {
        id: '2004',
        oldId: '4',
        label: '2004',
      },
      {
        id: '2005',
        oldId: '5',
        label: '2005',
      },
      {
        id: '2006',
        oldId: '6',
        label: '2006',
      },
      {
        id: '2007',
        oldId: '7',
        label: '2007',
      },
      {
        id: '2008',
        oldId: '8',
        label: '2008',
      },
      {
        id: '2009',
        oldId: '9',
        label: '2009',
      },
      {
        id: '2010',
        oldId: '10',
        label: '2010',
      },
      {
        id: '2011',
        oldId: '11',
        label: '2011',
      },
      {
        id: '2012',
        oldId: '12',
        label: '2012',
      },
      {
        id: '2013',
        oldId: '13',
        label: '2013',
      },
      {
        id: '2014',
        oldId: '14',
        label: '2014',
      },
      {
        id: '2015',
        oldId: '15',
        label: '2015',
      },
      {
        id: '2016',
        oldId: '16',
        label: '2016',
      },
    ],
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
};
