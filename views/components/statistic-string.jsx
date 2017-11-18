require('dotenv').config();
const debug = require('debug')('kdb:views:entry-text');
const React = require('react');

class Component extends React.Component {
  render() {
    const entry = this.props.entry || {};
    const label = entry.label || '';
    const showLabel = (!(this.props.showLabel === false) && label.length);
    const entryValue = entry.value || {};
    const string = entryValue.string;
    return (
      <div className="statistic statistic--string">
        {showLabel && <h4>{label}</h4>}
        <span className="statistic-string">{string}</span>
      </div>
    );
  }
}

module.exports = Component;
