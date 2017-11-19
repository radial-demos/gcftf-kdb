'use strict';

module.exports = {
  deforestationTrend: {
    type: 'KDBNumberAndYear',
    label: 'Deforestation Trend',
    numberFormat: '+,.1f',
    units: '%',
    value: (data) => {
      const value = { amount: null, year: '' };
      const entry = data.nation.fields.national_deforestation_rate;
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
