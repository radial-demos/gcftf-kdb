require('dotenv').config();
const debug = require('debug')('kdb:views:entry-number_and_currency');
const React = require('react');

class Component extends React.Component {
  render() {
    const entry = this.props.entry || {};
    debug(entry);
    const label = entry.label || '';
    const showLabel = (!(this.props.showLabel === false) && label.length);
    const entryValue = entry.value || {};
    const amount = (entryValue.amount === null) ? '--' : entryValue.amount;
    const currency = entryValue.currency || '';
    return (
      <div className="statistic statistic--numberAndCurrency">
        {showLabel && <h4>{label}</h4>}
        {currency && <span className="statistic-currency">{currency}</span>}<span className="statistic-amount">{amount}</span>
      </div>
    );
  }
}

module.exports = Component;
