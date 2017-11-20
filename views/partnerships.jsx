require('dotenv').config();
const debug = require('debug')('kdb:views:partnerships');

const React = require('react');
const JurisdictionLayout = require('./layouts/jurisdiction.jsx');

const initiativeFields = {
  name: { type: 'string', label: 'Name' },
  description: { type: 'html', label: 'description' },
  partners: { type: 'string', label: 'Partners' },
  fundingSource: { type: 'string', label: 'Funding Source' },
  fundingAmount: { type: 'string', label: 'Funding Amount' },
  initiativeType: { type: 'string', label: 'Initiative Type' },
  initiativeStatus: { type: 'string', label: 'Initiative Status' },
};

function Initiative(initiative) {
  return Object.entries(initiative).map(([fieldId, fieldObj]) => {
    if (fieldId === 'name') return <tr><td colspan="2">{fieldObj.string}</td></tr>;
    if (!initiativeFields[fieldId]) return '';
    if ((initiativeFields[fieldId].type === 'html') && fieldObj.html) return <tr><td>{initiativeFields[fieldId].label}</td><td dangerouslySetInnerHTML={{ __html: fieldObj.html }}></td></tr>;
    if ((initiativeFields[fieldId].type === 'string') && fieldObj.string) return <tr><td>{initiativeFields[fieldId].label}</td><td>{fieldObj.string}</td></tr>;
    return '';
  });
}

class Page extends React.Component {
  render() {
    const entry = this.props.data.jurisdiction.fields.initiatives || {};
    const initiatives = entry.values || [];
    return (
      <JurisdictionLayout {...this.props}>
        <table><tbody>
          {initiatives.map(initiative => <Initiative {...initiative}/>)}
        </tbody></table>
      </JurisdictionLayout>
    );
  }
}

module.exports = Page;
