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

class Layout extends React.Component {
  render() {
    return (
      <DefaultLayout {...this.props}>
        <div className="container container-full">
          <div><span>{this.props.data.nationName}</span><span>{this.props.data.name}</span></div>
          <NavJurisdictional {...this.props}/>
          <div>JURISDICTIONAL STUFF</div>
          {this.props.children}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Layout;
