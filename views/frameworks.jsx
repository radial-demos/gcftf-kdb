const React = require('react');
const JurisdictionalLayout = require('./layouts/jurisdictional.jsx');

class HelloMessage extends React.Component {
  render() {
    return (
      <JurisdictionalLayout {...this.props}>
        <div>Hello There {this.props.name}</div>
      </JurisdictionalLayout>
    );
  }
}

module.exports = HelloMessage;
