require('dotenv').config();
const debug = require('debug')('kdb:views:carbonaccounting');
const React = require('react');
const JurisdictionalLayout = require('./layouts/jurisdictional.jsx');
const {
  Divider,
  EntryText,
  StatisticString,
  StatisticContact,
  StatisticNumber,
  StatisticNumberAndCurrency,
  StatisticNumberAndYear,
} = require('./components');

class Page extends React.Component {
  render() {
    return (
      <JurisdictionalLayout {...this.props}>
        <EntryText entry={this.props.jurisdiction.fields.overviewForestMonitoringAndMeasurementSystems}/>
      </JurisdictionalLayout>
    );
  }
}

module.exports = Page;
