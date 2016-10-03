'use strict';

const app = require('../app');

const clearForm = (formId) => {
  document.getElementById(formId).reset();
};

const toggleAuth = () => {
  $('.auth-nav').toggle();
  $('.auth-forms').toggle();
  $('.user-nav').toggle();
  $('.game-play').toggle();
};

const toggleAuthOptions = () => {
  $('.sign-up-link').toggleClass('hidden');
  $('.log-in-link').toggleClass('block');
  $('#log-in').toggle('fast');
  $('#sign-up').toggle('fast');
};


const toggleChangePassword = () => {
  $('.pwd-form').slideToggle();
};

// const logInFailure = () => {
//   messageFade('.messages div', 'logInFail');
// };
//
// const logOutFailure = () => {
//   messageFade('.messages div', 'logOutFail');
// };
//
// const passwordChangeFailure = () => {
//   messageFade('.messages div', 'passwordChangeFail');
// };
//
// const signUpFailure = () => {
//   messageFade('.messages div', 'signUpFail');
// };

const logInSuccess = (data) => {
  app.user = data.user;
  toggleAuth();
  clearForm('sign-up');
  clearForm('log-in');
};

const logOutSuccess = () => {
  app.user = null;
  toggleAuth();
  clearForm('change-password');
  $('.pwd-form').hide();
  $('.sign-up-link').removeClass('hidden');
  $('.log-in-link').addClass('hidden');
  $('#log-in').show();
  $('#sign-up').hide();
};


module.exports = {
  clearForm,
  toggleAuth,
  toggleAuthOptions,
  toggleChangePassword,
  // logInFailure,
  // logOutFailure,
  // passwordChangeFailure,
  // signUpFailure,
  logInSuccess,
  logOutSuccess,
};
