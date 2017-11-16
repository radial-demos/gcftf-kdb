require('dotenv').config();
const debug = require('debug')('kdb:views:entry-text');
const React = require('react');

class Component extends React.Component {
  render() {
    const entry = this.props.entry || {};
    const label = entry.label || '';
    const showLabel = (!(this.props.showLabel === false) && label.length);
    const value = entry.value || {};
    // <h4>{label}</h4>
    return (
      <div>
        {showLabel && <h4>{label}</h4>}
        <div className="entry entry--text" dangerouslySetInnerHTML={{ __html: value.html }}>
        </div>
      </div>
    );
  }
}

module.exports = Component;
