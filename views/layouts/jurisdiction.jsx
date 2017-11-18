require('dotenv').config();
const debug = require('debug')('kdb:layouts:jurisdictional');
const React = require('react');
const DefaultLayout = require('./default.jsx');

// const NavJurisdictional = require('../components/nav-main.jsx');

function NavJurisdictional(props) {
  // console.log(props);
  return (
    <div>
      {
        props.views.map(r => <a href={`/${r.uriSegment}/${props.data.jurisdiction.nationUriSegment}/${props.data.jurisdiction.uriSegment}`}><div>{r.label}</div></a>)
      }
    </div>
  );
}

function Header(props) {
  const data = props.data || {};
  // debug(props.data);
  const nationName = data.nationName || '';
  const jurisdictionName = data.name || '';
  return (
    <div><span>{nationName}</span><span>{jurisdictionName}</span></div>
  );
}

class Layout extends React.Component {
  render() {
    return (
      <DefaultLayout {...this.props}>
        <div className="container container-full">
          <Header {...this.props}/>
          <NavJurisdictional {...this.props}/>
          {this.props.children}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Layout;
