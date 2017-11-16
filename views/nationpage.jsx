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
  StatisticNumberAndCurrency,
  StatisticNumberAndYear,
} = require('./components');

class Page extends React.Component {
  render() {
    return (
      <NationLayout {...this.props}>
        <EntryText entry={this.props.data.nation.fields.txt_laws}/>
        <EntryText entry={this.props.data.nation.fields.txt_policies_and_plans}/>
        <EntryText entry={this.props.data.nation.fields.txt_institutions}/>
      </NationLayout>
    );
  }
}

module.exports = Page;
