require('dotenv').config();
const debug = require('debug')('kdb:views:entry-text');
const React = require('react');

class Component extends React.Component {
  render() {
    const entry = this.props.entry || {};
    const label = entry.label || '';
    const showLabel = (!(this.props.showLabel === false) && label.length);
    const units = entry.units || '';
    const entryValue = entry.value || {};
    const amount = (entryValue.amount === null) ? '--' : entryValue.amount;
    return (
      <div className="statistic statistic--number">
        {showLabel && <h4>{label}</h4>}
        <span className="statistic-amount">{amount}</span>{units && <span className="statistic-units">{units}</span>}
      </div>
    );
  }
}

module.exports = Component;
