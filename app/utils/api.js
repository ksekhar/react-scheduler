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
  },
  fetchEmployeeList: function () {
    var encodedURI = window.encodeURI('http://localhost:3000/employees');
    return axios.get(encodedURI)
      .then(function (response) {
        return response.data;
      })
  },
  submitEmployee: function (employeeObj) {
    return axios.post('http://localhost:3000/employees', {
      first_name: employeeObj.firstName,
      last_name: employeeObj.lastName,
      phone_number: employeeObj.phoneNumber,
      date_of_birth: employeeObj.dateOfBirth,
      gender: employeeObj.gender
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
