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
        <StatisticContact entry={this.props}/>
        <StatisticContact entry={this.props}/>
        <StatisticContact entry={this.props}/>
        <Divider/>
        <StatisticNumber entry={this.props}/>
        <StatisticNumberAndCurrency entry={this.props}/>
        <StatisticNumberAndYear entry={this.props}/>
        <StatisticString entry={this.props}/>
      </JurisdictionLayout>
    );
  }
}

module.exports = Page;
