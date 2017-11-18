'use strict';

module.exports = {
  forestArea: {
    type: 'KDBNumber',
    label: 'Current Forest Area',
    numberFormat: ',.0f',
    units: 'km²',
    isConstant: true,
  },
  forestCarbon: {
    type: 'KDBNumber',
    label: 'Total Forest Carbon',
    numberFormat: ',.0f',
    units: 'M MtC',
    isConstant: true,
  },
  population: {
    type: 'KDBNumber',
    label: 'Population of State/Province',
    numberFormat: ',',
  },
  gdp: {
    type: 'KDBCurrency',
    label: 'State/Province GDP',
    numberFormat: ',',
  },
  per_capita_income: {
    type: 'KDBCurrency',
    label: 'Annual Per Capita Income',
    numberFormat: ',.0f',
  },
  human_development_index: {
    type: 'KDBNumber',
    label: 'Human Development Index',
    numberFormat: '.3f',
  },
  deforestation_reduction_goal: {
    type: 'KDBNumberAndYear',
    label: 'Deforestation Reduction Goals',
    valueId: 'deforestation_reduction_goal_value', /* needed only for pre-production data import */
    yearId: 'deforestation_reduction_goal_year', /* needed only for pre-production data import */
    numberFormat: ',.0f',
    units: 'km²/yr',
  },
  tons_of_co2_avoided: {
    type: 'KDBNumberAndYear',
    label: 'CO₂ Avoided',
    valueId: 'tons_of_co2_avoided_value', /* needed only for pre-production data import */
    yearId: 'tons_of_co2_avoided_year', /* needed only for pre-production data import */
    numberFormat: ',.0f',
    units: 'MtCO₂e',
  },
  deforestation_rate_target_value: {
    type: 'KDBNumber',
    label: 'Deforestation Rate Target',
    numberFormat: ',.0f',
    units: 'km²/yr',
  },
  original_forest_area: {
    type: 'KDBNumber',
    label: 'Original Forest Area',
    units: 'km²',
    numberFormat: ',.0f',
  },
  land_area: {
    type: 'KDBNumber',
    label: 'Total Land Area',
    units: 'km²',
    numberFormat: ',.0f',
  },
  main_exports: {
    type: 'KDBString',
    label: 'Main Exports',
  },
  txt_state_description: {
    type: 'KDBText',
    label: 'Description',
  },
  overviewForestMonitoringAndMeasurementSystems: {
    type: 'KDBText',
    label: 'Overview of Forest Monitoring and Measurement Systems',
  },
  frameworksLawsPoliciesStrategies: {
    type: 'KDBText',
    label: 'Laws, Policies and Strategies',
  },
  frameworksInstitutionalFramework: {
    type: 'KDBText',
    label: 'Institutional Framework',
  },
  frameworksZoningSpatialPlanning: {
    type: 'KDBText',
    label: 'Zoning and Spatial Planning',
  },
  frameworksSafeguards: {
    type: 'KDBText',
    label: 'Safeguards',
  },
  txt_causes_of_deforestation: {
    type: 'KDBText',
    label: 'Drivers of Deforestation',
  },
  initiatives: {
    type: '[KDBInitiative]',
    label: 'Current Partnerships and Initiatives',
    isNotCited: true,
  },
  urban_vs_rural_population_percent: {
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
  social_groups_percent: {
    type: 'KDBSeries',
    label: 'Ethnic Groups',
    seriesLabel: 'Group',
    numberFormat: '.2f',
    units: '%',
    isSorted: true,
    isPercent: true,
    labels: {
      a1: { label: 'Multi-ethnic' },
      a2: { label: 'White' },
      a3: { label: 'Black' },
      a4: { label: 'Indigenous' },
      a6: { label: 'Other' },
    },
  },
  gdp_breakdown_percent: {
    type: 'KDBSeries',
    label: 'GDP Breakdown',
    seriesLabel: 'Type',
    numberFormat: '.2f',
    units: '%',
    isSorted: true,
    isPercent: true,
    labels: {
      '1': { label: 'Services' },
      '2': { label: 'Agriculture' },
      '3': { label: 'Forestry' },
      '4': { label: 'Industry' },
      '5': { label: 'Mining' },
    },
  },
  current_forest_area_typologies: {
    type: 'KDBSeries',
    label: 'Major Vegetation Types',
    seriesLabel: 'Type',
    numberFormat: ',.0f',
    units: 'km²',
    isSorted: true,
    isPercent: true,
    labels: {
      '1': { label: 'Upland Dense Humid Forest' },
      '2': { label: 'Floodplain Forest' },
      '3': { label: 'Upland/Transition Dry Forest' },
      '4': { label: 'Savannah' },
      '5': { label: 'Woodlands' },
      '6': { label: 'Peat Forest' },
      '7': { label: 'Wetlands' },
      '8': { label: 'Mangroves' },
    },
  },
  forest_management: {
    type: 'KDBSeries',
    label: 'Forest Management',
    seriesLabel: 'Type',
    numberFormat: ',.0f',
    units: 'km²',
    isSorted: true,
    isPercent: true,
  },
  deforestation_vs_degradation: {
    type: 'KDBSeries',
    label: 'Deforestation vs. Degradation',
    seriesLabel: 'Type',
    numberFormat: '.2f',
    units: '%',
    isSorted: true,
    labels: {
      '1': { label: 'Intact Forest Area' },
      '2': { label: 'Deforested Area' },
      '3': { label: 'Degraded Area' },
    },
  },
  governor: {
    type: 'KDBPerson',
    label: 'Governor',
  },
  representative_1: {
    type: 'KDBPerson',
    label: 'Representative',
  },
  representative_2: {
    type: 'KDBPerson',
    label: 'Representative',
  },
  deforestation_rates: {
    type: 'KDBSeries',
    label: 'Deforestation Rates',
    seriesLabel: 'Year',
    numberFormat: ',.0f',
    units: 'km²',
    chartSpec: 'deforestation_rates',
    labels: {
      '1996': {
        oldId: '1',
        label: '1996',
      },
      '1997': {
        oldId: '2',
        label: '1997',
      },
      '1998': {
        oldId: '3',
        label: '1998',
      },
      '1999': {
        oldId: '4',
        label: '1999',
      },
      '2000': {
        oldId: '5',
        label: '2000',
      },
      '2001': {
        oldId: '6',
        label: '2001',
      },
      '2002': {
        oldId: '7',
        label: '2002',
      },
      '2003': {
        oldId: '8',
        label: '2003',
      },
      '2004': {
        oldId: '9',
        label: '2004',
      },
      '2005': {
        oldId: '10',
        label: '2005',
      },
      '2006': {
        oldId: '11',
        label: '2006',
      },
      '2007': {
        oldId: '12',
        label: '2007',
      },
      '2008': {
        oldId: '13',
        label: '2008',
      },
      '2009': {
        oldId: '14',
        label: '2009',
      },
      '2010': {
        oldId: '15',
        label: '2010',
      },
      '2011': {
        oldId: '16',
        label: '2011',
      },
      '2012': {
        oldId: '17',
        label: '2012',
      },
      '2013': {
        oldId: '18',
        label: '2013',
      },
      '2014': {
        oldId: '19',
        label: '2014',
      },
      '2015': {
        oldId: '20',
        label: '2015',
      },
      '2016': {
        oldId: '21',
        label: '2016',
      },
    },
  },
  are_current_deforestation_rates_known: {
    type: 'KDBSelect',
    label: 'Are Current Deforestation Rates Known?',
    options: {
      0: { label: 'Yes' },
      1: { label: 'No' },
      2: { label: 'Partially' },
    },
  },
  are_current_degradation_rates_known: {
    type: 'KDBSelect',
    label: 'Are Current Degradation Rates Known?',
    options: {
      0: { label: 'Yes' },
      1: { label: 'No' },
      2: { label: 'Partially' },
    },
  },
  populationPercent: {
    type: 'KDBNumber',
    label: '% of National Population',
    numberFormat: '.1f',
    units: '%',
    isDerived: true,
  },
  currentForestAreaPercent: {
    type: 'KDBNumber',
    label: '% of Land That Is Forest',
    numberFormat: '.1f',
    units: '%',
    isDerived: true,
    fn: (regionId, data) => { return 2; },
  },
  carbonPercentOfGlobal: {
    type: 'KDBNumber',
    label: '% of Global Total',
    numberFormat: '.3f',
    units: '%',
    isDerived: true,
  },
  landAreaPercentOfNation: {
    type: 'KDBNumber',
    label: '',
    numberFormat: '.1f',
    units: '%',
    isDerived: true,
  },
  nationalPercentForested: {
    type: 'KDBNumber',
    label: '',
    numberFormat: '.1f',
    units: '%',
    isDerived: true,
  },
  totalAreaDeforested: {
    type: 'KDBNumber',
    label: 'Total Area Deforested',
    numberFormat: ',.0f',
    units: 'km²',
    isDerived: true,
  },
  deforestationRateAverage: {
    type: 'KDBNumberAndYear',
    label: 'Average Deforestation Rate',
    numberFormat: ',.1f',
    units: 'km²',
    isDerived: true,
  },
  deforestationTrend: {
    type: 'KDBNumberAndYear',
    label: 'Deforestation Trend',
    numberFormat: '+,.1f',
    units: '%',
    isDerived: true,
  },
};
