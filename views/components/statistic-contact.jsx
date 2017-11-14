require('dotenv').config();
const debug = require('debug')('kdb:views:entry-text');
const React = require('react');

class Component extends React.Component {
  render() {
    return (
      <div className="statistic statistic--contact">
        <span className="contact-name">Name</span><br/>
        <span className="contact-email">email@somewhere.com</span><br/>
        <span className="contact-title">Company Title</span>
      </div>
    );
  }
}

module.exports = Component;
