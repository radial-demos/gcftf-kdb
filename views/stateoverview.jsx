const React = require('react');
const JurisdictionalLayout = require('./layouts/jurisdictional.jsx');
const SectionDivider = require('./components/divider.jsx');
const EntryText = require('./components/entry-text.jsx');
const StatisticString = require('./components/statistic-string.jsx');
const StatisticContact = require('./components/statistic-contact.jsx');
const StatisticNumber = require('./components/statistic-number.jsx');
const StatisticNumberAndCurrency = require('./components/statistic-number_and_currency.jsx');
const StatisticNumberAndYear = require('./components/statistic-number_and_year.jsx');

class Page extends React.Component {
  render() {
    return (
      <JurisdictionalLayout {...this.props}>
        <EntryText entry={this.props}/>
        <StatisticContact entry={this.props}/>
        <StatisticContact entry={this.props}/>
        <StatisticContact entry={this.props}/>
        <SectionDivider/>
        <StatisticNumber entry={this.props}/>
        <StatisticNumberAndCurrency entry={this.props}/>
        <StatisticNumberAndYear entry={this.props}/>
        <StatisticString entry={this.props}/>
      </JurisdictionalLayout>
    );
  }
}

module.exports = Page;
