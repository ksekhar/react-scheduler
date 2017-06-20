var React = require('react');
var api = require('../utils/api');

class New extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    api.submitAccount(this.state.email, this.state.password)
    this.setState(function() {
        var newState = {};
        newState['email'] = '';
        newState['password'] = '';
        return newState;
    });
  }
  handleChange(event, name) {
      var value = event.target.value;

      this.setState(function() {
          return {
              [name]: value,
          };
      });
  }
  render () {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
                <label className="header" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    placeholder="Email"
                    type="text"
                    autoComplete="off"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e,'email')}
                />
                <input
                    id="password"
                    placeholder="Password"
                    type="password"
                    autoComplete="off"
                    value={this.state.password}
                    onChange={(e) => this.handleChange(e, 'password')}
                />
                <button className="button" type="submit" disabled={!this.state.email}>
                    Submit
                </button>
            </form>
    )
  }
}

module.exports = New;
