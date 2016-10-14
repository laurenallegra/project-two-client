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
      // onIndexuserPose(event); // TODO
    })
    .fail(ui.createUserPoseFail);
};

const onIndexUserPoses = function (event) {
  event.preventDefault();
  api.indexUserPoses()
  .done(ui.indexUserPoseSuccess)
  .fail(ui.failure);
};

const onUpdateUserPose = function (event) {
   event.preventDefault();
   let data = getFormFields(event.target);
   api.updateUserPose(data)
     .done(ui.success)
     .fail(ui.failure);
 };

const onDeleteUserPose = function (event) {
   event.preventDefault();
   let data = getFormFields(event.target);
   api.deleteUserPose(data)
     .done(ui.success)
     .fail(ui.failure);
 };

const addHandlers = () => {
  console.log('addHandlers Ran!!!');
  $('#create-user-pose').on('submit', onCreateUserPose);
  $('#index-user-poses').on('submit', onIndexUserPoses);
  $('#update-user-pose').on('submit', onUpdateUserPose);
  $('#delete-user-pose').on('submit', onDeleteUserPose);
};


module.exports = {
  addHandlers,
};
