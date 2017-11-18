require('dotenv').config();
const debug = require('debug')('kdb:views:statistic-select');
const React = require('react');

class Component extends React.Component {
  render() {
    const entry = this.props.entry || {};
    const label = entry.label || '';
    const showLabel = (!(this.props.showLabel === false) && label.length);
    const entryValue = entry.value || {};
    const { index } = entryValue;
    const options = Object.entries(entry.options || {}).map(([optionId, optionObj]) => {
      return ({
        id: optionId,
        label: optionObj.label || '',
        isActive: (String(optionId) === String(index)),
      });
    });
    return (
      <div className="statistic statistic--select">
        {showLabel && <h4>{label}</h4>}
        <ul>
        {
          options.map(r => <li className={r.isActive ? 'option option--active' : 'option'}>{r.label}</li>)
        }
        </ul>
      </div>
    );
  }
}

module.exports = Component;
