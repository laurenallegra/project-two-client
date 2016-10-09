'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onCreateUserPose = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createUserPose(data)
    .done( function(){
      ui.createUserPoseSuccess();
      // onIndexThoughts(event); // TODO
    })
    .fail(ui.createUserPoseFail);
};

const addHandlers = () => {
  console.log('addHandlers Ran!!!');
  $('#create-user-pose').on('submit', onCreateUserPose);
};


module.exports = {
  addHandlers,
};
