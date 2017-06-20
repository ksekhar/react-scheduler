var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Nav = require('./Nav');
var List = require('./List');
var New = require('./New');
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/new' component={New} />
            <Route exact path='/list' component={List} />
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
