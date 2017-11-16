require('dotenv').config();
const debug = require('debug')('kdb:layouts:default');
const React = require('react');

const NavMain = require('../components/nav-main.jsx');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.viewId}</title>
          <link rel="stylesheet" type="text/css" href="/assets/font-awesome-4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" type="text/css" href="/assets/bootstrap-4.0.0-beta.2/dist/css/bootstrap.min.css"/>
        </head>
        <body>
          <div className="container container-header">
            <div className="logoArea">
              <span className="logoArea-logo">GCF</span>
              <span className="logoArea-text">
                <span className="logoArea-name">Governors' Climate &amp; Forests Task Force</span><br/>
                <span className="logoArea-project">Knowledge Database</span>
              </span>
            </div>
          </div>
          <div className="container container-full">
            <NavMain {...this.props}/>
          </div>
          {this.props.children}
          <script type="text/javascript" src="/assets/jquery-3.2.1.min.js"></script>
          <script src="/assets/popper.js-1.12.5/dist/umd/popper.min.js"></script>
          <script src="/assets/bootstrap-4.0.0-beta.2/dist/js/bootstrap.min.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
