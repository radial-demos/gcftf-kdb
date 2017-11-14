const React = require('react');
const DefaultLayout = require('./layouts/default.jsx');

class Page extends React.Component {
  render() {
    return (
      <DefaultLayout {...this.props}>
        <div>Hello {this.props.viewId}</div>
      </DefaultLayout>
    );
  }
}

module.exports = Page;
