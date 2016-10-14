'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onToggleAuthOptions = () => {
  ui.toggleAuthOptions();
};

const onToggleChangePassword = () => {
  ui.toggleChangePassword();
};

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onLogIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.logIn(data)
    .done(ui.logInSuccess)
    .fail(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const onLogOut = function (event) {
  event.preventDefault();
  api.logOut()
    .done(ui.logOutSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#log-in').on('submit', onLogIn);
  $('.log-out').on('click', onLogOut);
  $('#change-password').on('submit', onChangePassword);
  $('.sign-up-link').on('click', onToggleAuthOptions);
  $('.log-in-link').on('click', onToggleAuthOptions);
  $('.change-password-link').on('click', onToggleChangePassword);
};

module.exports = {
  addHandlers,
};
