'use strict';

const indexUserPosesTemplate = require ('../templates/index-user-poses.handlebars');

const clearInputField = () => {
  $('.input').val('');
};

const createUserPoseSuccess = (data) => {
  console.log(data);
  clearInputField();
};

const createUserPoseFail = () => {
  clearInputField();
};

const indexUserPoseSuccess = (user_poses) => {
$('.display-content').html(indexUserPosesTemplate(user_poses));
  console.log(user_poses);
  clearInputField();
};

const success = (data) => {
  console.log("Success", data);
};

const failure = (data) => {
  console.log("Oops", data);
};

module.exports = {
  createUserPoseSuccess,
  createUserPoseFail,
  indexUserPoseSuccess,
  success,
  failure,
};
