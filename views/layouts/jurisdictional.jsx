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
        props.viewDefinitions.map(r => <a href={`/${r.uriSegment}/${props.nationId}/${props.jurisdictionId}`}><div>{r.label}</div></a>)
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
          <div>JURISDICTIONAL STUFF</div>
          {this.props.children}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Layout;
