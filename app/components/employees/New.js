var React = require('react');
var api = require('../../utils/api');

class New extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      dateOfBirth: '',
      gender: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    api.submitEmployee(this.state);
    this.setState(function() {
        var newState = {};
        newState['firstName'] = '';
        newState['lastName'] = '';
        newState['phoneNumber'] = '';
        newState['dateOfBirth'] = '';
        newState['gender'] = '';
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
                <label className="header" htmlFor="firstName">
                    firstName
                </label>
                <input
                    id="first-name"
                    placeholder="First Name"
                    type="text"
                    autoComplete="off"
                    value={this.state.firstName}
                    onChange={(e) => this.handleChange(e,'firstName')}
                />
                <input
                    id="last-name"
                    placeholder="Last Name"
                    type="text"
                    autoComplete="off"
                    value={this.state.lastName}
                    onChange={(e) => this.handleChange(e, 'lastName')}
                />
                <input
                    id="phone-number"
                    placeholder="Phone Number"
                    type="text"
                    autoComplete="off"
                    value={this.state.phoneNumber}
                    onChange={(e) => this.handleChange(e, 'phoneNumber')}
                />
                <button className="button" type="submit" disabled={!this.state.firstName}>
                    Submit
                </button>
            </form>
    )
  }
}

module.exports = New;
