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

module.exports = {
  createUserPose,
};
