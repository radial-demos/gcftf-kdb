require('dotenv').config();
const debug = require('debug')('kdb:views:nationpage');
const React = require('react');
const NationLayout = require('./layouts/nation.jsx');
const {
  Divider,
  EntryText,
  StatisticString,
  StatisticContact,
  StatisticNumber,
} = require('./components');

class Page extends React.Component {
  render() {
    return (
      <NationLayout {...this.props}>
        <EntryText entry={this.props.data.nation.fields.txt_laws}/>
        <EntryText entry={this.props.data.nation.fields.txt_policies_and_plans}/>
        <EntryText entry={this.props.data.nation.fields.txt_institutions}/>
        <Divider label="Demographics"/>
        <StatisticNumber entry={this.props.data.nation.fields.national_population}/>
        <Divider label="Economy"/>
        <StatisticNumber entry={this.props.data.nation.fields.national_gdp}/>
        <StatisticNumber entry={this.props.data.nation.fields.national_per_capita_income}/>
        <StatisticNumber entry={this.props.data.nation.fields.national_human_development_index}/>
        <StatisticString entry={this.props.data.nation.fields.national_main_exports}/>
        <Divider label="Overview"/>
        <StatisticNumber entry={this.props.data.nation.fields.national_land_area}/>
        <StatisticNumber entry={this.props.data.nation.fields.national_percent_forested}/>
        <StatisticNumber entry={this.props.data.nation.calculations.deforestationTrend}/>
      </NationLayout>
    );
  }
}

module.exports = Page;
