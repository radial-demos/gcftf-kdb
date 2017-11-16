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
        <EntryText showLabel={false} entry={this.props.jurisdiction.fields.txt_state_description}/>
        <StatisticContact entry={this.props}/>
        <StatisticContact entry={this.props}/>
        <StatisticContact entry={this.props}/>
        <Divider/>
        <StatisticNumber entry={this.props}/>
        <StatisticNumberAndCurrency entry={this.props}/>
        <StatisticNumberAndYear entry={this.props}/>
        <StatisticString entry={this.props}/>
      </JurisdictionalLayout>
    );
  }
}

module.exports = Page;
