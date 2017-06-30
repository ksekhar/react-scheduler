var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Nav = require('./Nav');
var ListUser = require('./users/List');
var NewUser = require('./users/New');
var ListEmployee = require('./employees/List');
var NewEmployee = require('./employees/New');
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/users/new' component={NewUser} />
            <Route exact path='/users/list' component={ListUser} />
            <Route exact path='/employees/new' component={NewEmployee} />
            <Route exact path='/employees/list' component={ListEmployee} />
            <Route render={function () {
              return <p> Not Found </p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}
module.exports = App;
