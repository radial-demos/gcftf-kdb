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
        <EntryText entry={this.props.data.jurisdiction.fields.frameworksLawsPoliciesStrategies}/>
        <EntryText entry={this.props.data.jurisdiction.fields.frameworksInstitutionalFramework}/>
        <EntryText entry={this.props.data.jurisdiction.fields.frameworksZoningSpatialPlanning}/>
        <EntryText entry={this.props.data.jurisdiction.fields.frameworksSafeguards}/>
      </JurisdictionLayout>
    );
  }
}

module.exports = Page;
