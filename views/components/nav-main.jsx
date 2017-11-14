require('dotenv').config();
const debug = require('debug')('kdb:views:nav');
const React = require('react');

const items = [
  { id: 'index', model: 'home', name: 'Home' },
  { id: 'about', model: 'about', name: 'About the Database' },
  { id: 'statesandprovinces', name: 'GCF States & Provinces', isDropdown: true },
];

function Jurisdictions(props) {
  return props.jurisdictions.map((item) => {
    return (
      <a href={`/StateOverview/${item.jurisdictionId}`}><div>{item.jurisdictionName}</div></a>
    );
  });
}

function Dropdown(props) {
  return 'DROPDOWN';
  // return props.navColumns.map((column) => {
  //   return (
  //     <div>
  //     {column.navItems.map((item) => {
  //       return (
  //         <div>
  //           <a href={`/NationPage/${item.nationId}`}><div>{item.nationName}</div></a>
  //           <Jurisdictions jurisdictions={item.jurisdictions}/>
  //         </div>
  //       );
  //     })}
  //     </div>
  //   );
  // });
}

function NavItems(props) {
  return items.map((item) => {
    if (item.isDropdown !== true) {
      return <li className="nav-item"><a className="nav-link" href={`/${item.id}`}>{item.name}</a></li>;
    }
    return <li className="nav-item nav-dropdown"><span className="nav-link">GCF States & Provinces</span><Dropdown {...props}/></li>;
  });
}

class Nav extends React.Component {
  render() {
    return (
      <div className="navigation navigation-main">
        <ul className="nav nav-main">
          <NavItems {...this.props}/>
        </ul>
      </div>
    );
  }
}

module.exports = Nav;
