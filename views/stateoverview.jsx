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
} = require('./components');

class Page extends React.Component {
  render() {
    return (
      <JurisdictionLayout {...this.props}>
        <EntryText showLabel={false} entry={this.props.data.jurisdiction.fields.txt_state_description}/>
        <StatisticContact entry={this.props.data.jurisdiction.fields.governor}/>
        <StatisticContact entry={this.props.data.jurisdiction.fields.representative_1}/>
        <StatisticContact entry={this.props.data.jurisdiction.fields.representative_2}/>
        <Divider label="Summary"/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.land_area}/>
        <Divider label="Demographics"/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.population}/>
        <Divider label="Economy"/>
        <StatisticNumberAndCurrency entry={this.props.data.jurisdiction.fields.gdp}/>
        <StatisticNumberAndCurrency entry={this.props.data.jurisdiction.fields.per_capita_income}/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.human_development_index}/>
        <StatisticString entry={this.props.data.jurisdiction.fields.main_exports}/>
        <Divider label="Forest Status"/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.original_forest_area}/>
      </JurisdictionLayout>
    );
  }
}

module.exports = Page;
