require('dotenv').config();
const debug = require('debug')('kdb:views:nationpage');
const React = require('react');
const NationLayout = require('./layouts/nation.jsx');

class Page extends React.Component {
  render() {
    return (
      <NationLayout {...this.props}>
        <div>Hello {this.props.viewId}</div>
      </NationLayout>
    );
  }
}

module.exports = Page;
