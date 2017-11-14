require('dotenv').config();
const debug = require('debug')('kdb:views:entry-text');
const React = require('react');

class Component extends React.Component {
  render() {
    return (
      <div className="entry entry--text">
        <p>I am some text</p>
      </div>
    );
  }
}

module.exports = Component;
