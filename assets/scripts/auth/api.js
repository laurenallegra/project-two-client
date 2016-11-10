'use strict';

const app = require('../app');

// ajax request to the api to let a new user sign up
const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

// ajax request to let a user log in
const logIn = (data) => {
  let request = $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
  });
  return request;
};

// ajax request to let a signed-in user change his/her password
const changePassword = (data) => {
  let request = $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
  return request;
};

// ajax request to let a signed-in user sign out
const logOut = () => {
  let request = $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
  return request;
};

// const autoLogIn = (userData, textStatus, jqXHR, signUpData) => {
//   let request = $.ajax({
//     url: app.host + '/sign-in',
//     method: 'POST',
//     data: signUpData,
//   });
//   return request;
// };

module.exports = {
  signUp,
  logIn,
  logOut,
  changePassword,
  // autoLogIn,
};
