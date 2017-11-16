const React = require('react');
const JurisdictionLayout = require('./layouts/jurisdiction.jsx');

class HelloMessage extends React.Component {
  render() {
    return (
      <JurisdictionLayout {...this.props}>
        <div>Hello There {this.props.name}</div>
      </JurisdictionLayout>
    );
  }
}

module.exports = HelloMessage;
