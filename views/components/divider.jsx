require('dotenv').config();
const debug = require('debug')('kdb:views:divider');
const React = require('react');

class Component extends React.Component {
  render() {
    return (
      <h3 className="divider">
        Section
      </h3>
    );
  }
}

module.exports = Component;
