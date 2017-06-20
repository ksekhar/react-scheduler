var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
  render () {
    return (
      <ul className='nav'>
        <li>
          <NavLink activeClassName='active' to='/new'>
            New
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/list'>
            List
          </NavLink>
        </li>
      </ul>
    )
  }
}

module.exports = Nav;
