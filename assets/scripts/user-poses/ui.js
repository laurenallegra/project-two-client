'use strict';

let _ = require('underscore');

const indexUserPosesTemplate = require ('../templates/index-user-poses.handlebars');

const clearInputField = () => {
  $('.standard-input').val('');
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
  clearInputField();
};

const shuffleUserPoses = (posesArray) => {
  let user_poses = _.shuffle(posesArray);
  $('.display-content').html(indexUserPosesTemplate({ user_poses }));
};

const success = (data) => {
  console.log("Success", data);
};

const failure = (data) => {
  console.log("Oops", data);
};

module.exports = {
  clearInputField,
  createUserPoseSuccess,
  createUserPoseFail,
  indexUserPoseSuccess,
  shuffleUserPoses,
  success,
  failure,
};
