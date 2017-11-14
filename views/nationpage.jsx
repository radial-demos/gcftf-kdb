require('dotenv').config();
const debug = require('debug')('kdb:views:nationpage');
const React = require('react');
const NationalLayout = require('./layouts/national.jsx');

class Page extends React.Component {
  render() {
    return (
      <NationalLayout {...this.props}>
        <div>Hello {this.props.viewId}</div>
      </NationalLayout>
    );
  }
}

module.exports = Page;
