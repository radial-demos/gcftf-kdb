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
  StatisticSelect,
} = require('./components');

class Page extends React.Component {
  render() {
    return (
      <JurisdictionLayout {...this.props}>
        <Divider label="Summary"/>
        <StatisticNumber entry={this.props.data.jurisdiction.constants.forestCarbon}/>
        <StatisticNumber entry={this.props.data.jurisdiction.calculations.carbonPercentOfGlobal}/>
        <Divider label="Reference Levels and Targets"/>
        <StatisticNumber entry={this.props.data.jurisdiction.calculations.deforestationRateAverage}/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.deforestation_reduction_goal}/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.tons_of_co2_avoided}/>
        <Divider label="Deforestation Dynamics Monitoring"/>
        <StatisticSelect entry={this.props.data.jurisdiction.fields.are_current_deforestation_rates_known}/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.deforestation_rate_target_value}/>
        <EntryText entry={this.props.data.jurisdiction.fields.overviewForestMonitoringAndMeasurementSystems}/>
      </JurisdictionLayout>
    );
  }
}

module.exports = Page;
