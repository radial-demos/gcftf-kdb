const React = require('react');
const JurisdictionLayout = require('./layouts/jurisdiction.jsx');

class Page extends React.Component {
  render() {
    return (
      <JurisdictionLayout {...this.props}>
        <div>Hello {this.props.name}</div>
      </JurisdictionLayout>
    );
  }
}

module.exports = Page;
