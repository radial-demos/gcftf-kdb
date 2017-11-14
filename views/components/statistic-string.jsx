require('dotenv').config();
const debug = require('debug')('kdb:views:entry-text');
const React = require('react');

class Component extends React.Component {
  render() {
    return (
      <div className="statistic statistic--string">
        <span className="statistic-string">String</span>
      </div>
    );
  }
}

module.exports = Component;
