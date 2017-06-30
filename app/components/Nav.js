var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
  render () {
    return (
      <ul className='nav'>
        <li>
          <ul className='nav'>
            Users
            <li>
              <NavLink activeClassName='active' to='/users/new'>
                New
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/users/list'>
                List
              </NavLink>
            </li>
          </ul>
          <ul className='nav'>
            Employees
            <li>
              <NavLink activeClassName='active' to='/employees/new'>
                New
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/employees/list'>
                List
              </NavLink>
            </li>
          </ul>
          <ul className='nav'>
            Customers
            <li>
              <NavLink activeClassName='active' to='/employees/new'>
                New
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/employees/list'>
                List
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}

module.exports = Nav;
