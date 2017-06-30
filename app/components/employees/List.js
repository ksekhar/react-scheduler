var React = require('react');
var api = require('../../utils/api');

class ItemList extends React.Component {
  render () {
    return (
      <li key={this.props.index}>
        <span className='employee'>{this.props.item.first_name}</span>
        <span className='employee'>{this.props.item.last_name}</span>
        <span className='employee'>{this.props.item.phone_number}</span>
      </li>
    )
  }
}

class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      accounts: []
    }
  }
  componentDidMount () {
    api.fetchEmployeeList().then(
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
            <ItemList item={account} index={index} />
          )
        })}
      </ul>
    )
  }
}

module.exports = List;
