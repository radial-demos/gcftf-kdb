require('dotenv').config();
const debug = require('debug')('kdb:views:divider');
const React = require('react');

class Component extends React.Component {
  render() {
    const label = this.props.label || '';
    return (
      <h3 className="divider">
        {label && label}
      </h3>
    );
  }
}

module.exports = Component;
