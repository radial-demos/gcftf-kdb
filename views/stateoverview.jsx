const React = require('react');
const JurisdictionLayout = require('./layouts/jurisdiction.jsx');

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
      <JurisdictionLayout {...this.props}>
        <EntryText showLabel={false} entry={this.props.data.jurisdiction.fields.txt_state_description}/>
        <StatisticContact entry={this.props.data.jurisdiction.fields.governor}/>
        <StatisticContact entry={this.props.data.jurisdiction.fields.representative_1}/>
        <StatisticContact entry={this.props.data.jurisdiction.fields.representative_2}/>
        <Divider label="Summary"/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.land_area}/>
        <StatisticNumber entry={this.props.data.jurisdiction.calculations.currentForestAreaPercent}/>
        <StatisticNumber entry={this.props.data.jurisdiction.calculations.deforestationTrend}/>
        <Divider label="Demographics"/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.population}/>
        <StatisticNumber entry={this.props.data.jurisdiction.calculations.populationPercent}/>
        <Divider label="Economy"/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.gdp}/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.per_capita_income}/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.human_development_index}/>
        <StatisticString entry={this.props.data.jurisdiction.fields.main_exports}/>
        <Divider label="Forest Status"/>
        <StatisticNumber entry={this.props.data.jurisdiction.fields.original_forest_area}/>
        <StatisticNumber entry={this.props.data.jurisdiction.constants.forestArea}/>
        <StatisticNumber entry={this.props.data.jurisdiction.calculations.totalAreaDeforested}/>
        <StatisticNumber entry={this.props.data.jurisdiction.constants.forestCarbon}/>
      </JurisdictionLayout>
    );
  }
}

module.exports = Page;
