var React = require('react');
var api = require('../utils/api');

class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      accounts: []
    }
  }
  componentDidMount () {
    api.fetchAccountList().then(
      function(accounts) {
        this.setState(function() {
          return {
            accounts: accounts,
            loading: false
          }
        })
      }.bind(this)
    );
  }
  render () {
    console.log(this.state);
    if(this.state.loading === true) {
      return <p> Loading ... </p>
    }
    return (
      <ul className='accounts'>
        {this.state.accounts.map((account, index) => {
          return (
            <li key={account.id}>{account.email}</li>
          )
        })}
      </ul>
    )
  }
}

module.exports = List;
