var axios = require('axios');

module.exports = {
  fetchAccountList: function () {
    var encodedURI = window.encodeURI('http://localhost:3000/users');
    return axios.get(encodedURI)
      .then(function (response) {
        return response.data;
      })
  },
  submitAccount: function (email, password) {
    return axios.post('http://localhost:3000/users', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
