require('dotenv').config();
const debug = require('debug')('kdb:views:entry-text');
const React = require('react');

class Component extends React.Component {
  render() {
    return (
      <div className="statistic statistic--numberAndYear">
        <span className="statistic-amount">###,###</span> <span className="statistic-units">Units</span> <span className="statistic-year">####</span>
      </div>
    );
  }
}

module.exports = Component;
