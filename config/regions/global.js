'use strict';

/**
 * Global data consists only of constants. No values are stored in the database. Nothing is editable to the end user through the API.
 */
module.exports = {
  constants: {
    tropicalForestArea: {
      type: 'KDBNumber',
      format: ',',
      units: 'km²',
      src: 14287108,
      value: { amount: 14287108 },
    },
    tropicalForestCarbonStocks: {
      type: 'KDBNumber',
      format: ',',
      units: 'MtC',
      value: { amount: 158973 },
    },
  },
};
