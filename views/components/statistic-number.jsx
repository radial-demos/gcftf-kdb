require('dotenv').config();
const debug = require('debug')('kdb:views:component-number');
const React = require('react');

class Component extends React.Component {
  render() {
    const entry = this.props.entry || {};
    const label = (!(this.props.showLabel === false)) ? (entry.label || '') : '';
    const entryValue = entry.value || {};
    const currency = entryValue.currency || '';
    const units = (currency) ? '' : (entry.units || ''); // note that units are not displayed if currency is supplied
    const amount = (entryValue.amount === null) ? '--' : entryValue.amount;
    const year = (entryValue.year || '');
    return (
      <div className="statistic statistic--number">
        {label && <h4>{label}</h4>}
        {currency && <span className="statistic-currency">{currency}</span>}<span className="statistic-amount">{amount}</span>{units && <span className="statistic-units">{units}</span>}{year && <span className="statistic-year">{year}</span>}
      </div>
    );
  }
}

module.exports = Component;
