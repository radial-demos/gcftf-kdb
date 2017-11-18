require('dotenv').config();
const debug = require('debug')('kdb:layouts:jurisdictional');
const React = require('react');
const DefaultLayout = require('./default.jsx');

class Layout extends React.Component {
  render() {
    return (
      <DefaultLayout {...this.props}>
        <div className="container container-full">
          {this.props.children}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Layout;
