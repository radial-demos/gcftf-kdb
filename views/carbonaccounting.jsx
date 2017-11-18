require('dotenv').config();
const debug = require('debug')('kdb:views:carbonaccounting');
const React = require('react');
const JurisdictionLayout = require('./layouts/jurisdiction.jsx');
const {
  Divider,
  EntryText,
  StatisticString,
  StatisticContact,
  StatisticNumber,
  StatisticNumberAndCurrency,
  StatisticNumberAndYear,
  StatisticSelect,
} = require('./components');

class Page extends React.Component {
  render() {
    return (
      <JurisdictionLayout {...this.props}>
        <Divider label="Summary"/>
        <Divider label="Reference Levels and Targets"/>
        <StatisticNumberAndYear entry={this.props.data.jurisdiction.fields.deforestation_reduction_goal}/>
        <StatisticNumberAndYear entry={this.props.data.jurisdiction.fields.tons_of_co2_avoided}/>
        <Divider label="Deforestation Dynamics Monitoring"/>
        <StatisticSelect entry={this.props.data.jurisdiction.fields.are_current_deforestation_rates_known}/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.deforestation_rate_target_value}/>
        <EntryText entry={this.props.data.jurisdiction.fields.overviewForestMonitoringAndMeasurementSystems}/>
      </JurisdictionLayout>
    );
  }
}

module.exports = Page;
