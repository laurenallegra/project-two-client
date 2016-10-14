'use strict';

const app = require('../app');

const createUserPose = (data) => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/user_poses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: data,
  });
};

const indexUserPoses = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/user_poses',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const updateUserPose = (data) => {
   return $.ajax({
     url: app.host + '/user_poses/' + data.user_pose.id,
     method: 'PATCH',
     headers: {
       Authorization: 'Token token=' + app.user.token,
     },
     data: data,
   });
 };

 const deleteUserPose = (data) => {
   return $.ajax({
     url: app.host + '/user_poses/' + data.user_pose.id,
     method: 'DELETE',
     headers: {
       Authorization: 'Token token=' + app.user.token,
     }
   });
 };

module.exports = {
  createUserPose,
  indexUserPoses,
  updateUserPose,
  deleteUserPose,
};
