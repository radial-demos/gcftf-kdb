'use strict';

module.exports = {
  populationPercent: {
    type: 'KDBNumber',
    label: '% of National Population',
    numberFormat: '.1f',
    units: '%',
    value: (data) => {
      return { amount: 2 };
    },
  },
  currentForestAreaPercent: {
    type: 'KDBNumber',
    label: '% of Land that is Forest',
    numberFormat: '.1f',
    units: '%',
    value: (data) => {
      const value = { amount: null };
      let landArea = null;
      let forestArea = null;
      if (data.jurisdiction.fields.land_area && data.jurisdiction.fields.land_area.value) {
        landArea = data.jurisdiction.fields.land_area.value.amount;
      }
      if (data.jurisdiction.constants.forestArea && data.jurisdiction.constants.forestArea.value) {
        forestArea = data.jurisdiction.constants.forestArea.value.amount;
      }
      if ((landArea !== null) && (forestArea !== null)) {
        value.amount = 100 * forestArea / landArea;
      }
      return value;
    },
  },
  carbonPercentOfGlobal: {
    type: 'KDBNumber',
    label: '% of Global Total',
    numberFormat: '.3f',
    units: '%',
    value: (data) => {
      return { amount: 2 };
    },
  },
  landAreaPercentOfNation: {
    type: 'KDBNumber',
    label: '',
    numberFormat: '.1f',
    units: '%',
    value: (data) => {
      return { amount: 2 };
    },
  },
  nationalPercentForested: {
    type: 'KDBNumber',
    label: '',
    numberFormat: '.1f',
    units: '%',
    value: (data) => {
      return { amount: 2 };
    },
  },
  totalAreaDeforested: {
    type: 'KDBNumber',
    label: 'Total Area Deforested',
    numberFormat: ',.0f',
    units: 'km²',
    value: (data) => {
      const value = { amount: null };
      let originalForestArea = null;
      let forestArea = null;
      if (data.jurisdiction.fields.original_forest_area && data.jurisdiction.fields.original_forest_area.value) {
        originalForestArea = data.jurisdiction.fields.original_forest_area.value.amount;
      }
      if (data.jurisdiction.constants.forestArea && data.jurisdiction.constants.forestArea.value) {
        forestArea = data.jurisdiction.constants.forestArea.value.amount;
      }
      if ((originalForestArea !== null) && (forestArea !== null)) {
        value.amount = originalForestArea - forestArea;
      }
      return value;
    },
  },
  deforestationRateAverage: {
    type: 'KDBNumberAndYear',
    label: 'Average Deforestation Rate',
    numberFormat: ',.1f',
    units: 'km²',
    value: (data) => {
      const value = { amount: null, year: '' };
      const entry = data.jurisdiction.fields.deforestation_rates;
      if (!entry) return value;
      if (!Array.isArray(entry.labels)) return value;
      let total = 0;
      let count = 0;
      let yearRange = ['', ''];
      entry.labels.forEach((label) => {
        if (label.amount !== null) {
          total += label.amount;
          count += 1;
          if (yearRange[0]) {
            yearRange[1] = label.label;
          } else {
            yearRange[0] = label.label;
          }
        }
      });
      if (count) {
        value.amount = total / count;
        value.year = yearRange.join('-');
      }
      return value;
    },
  },
  deforestationTrend: {
    type: 'KDBNumberAndYear',
    label: 'Deforestation Trend',
    numberFormat: '+,.1f',
    units: '%',
    value: (data) => {
      const value = { amount: null, year: '' };
      const entry = data.jurisdiction.fields.deforestation_rates;
      if (!entry) return value;
      if (!Array.isArray(entry.labels)) return value;
      for (let i = entry.labels.length - 1; i > 1; i -= 1) {
        const label1 = entry.labels[i - 1];
        const label2 = entry.labels[i];
        if ((label1.amount !== null) && ((label2.amount !== null))) {
          if (label2.amount) {
            value.amount = 100 * (label2.amount - label1.amount) / label1.amount;
            value.year = `${label1.label} - ${label2.label}`;
          }
          break;
        }
      }
      return value;
    },
  },
};
