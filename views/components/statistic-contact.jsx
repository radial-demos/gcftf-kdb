require('dotenv').config();
const debug = require('debug')('kdb:views:entry-text');
const React = require('react');

class Component extends React.Component {
  render() {
    const entry = this.props.entry || {};
    const entryValue = entry.value || {};
    debug(entryValue);
    const label = entry.label || '';
    const showLabel = (!(this.props.showLabel === false) && label.length);
    const nameFull = `${entryValue.firstName.string} ${entryValue.lastName.string}`.trim();
    const email = entryValue.email.string;
    const companyTitle = entryValue.companyTitle.string;
    const isPopulated = (nameFull && email && companyTitle);
    return (
      <div className="statistic statistic--contact">
        {showLabel && <h4>{label}</h4>}
        {isPopulated && <ul>
          <li className="contact-name">{nameFull}</li>
          {email && <li className="contact-email">{email}</li>}
          {companyTitle && <span className="contact-title">{companyTitle}</span>}
        </ul>}
      </div>
    );
  }
}

module.exports = Component;
