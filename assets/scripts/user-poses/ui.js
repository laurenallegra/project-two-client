'use strict';


const clearInputField = () => {
  $('.input').val('');
};

const createUserPoseSuccess = () => {
  clearInputField();
};

const createUserPoseFail = () => {
  clearInputField();
};

module.exports = {
  createUserPoseSuccess,
  createUserPoseFail,
};
