'use strict';

module.exports.init = initModels;

function initModels(app) {
  const modelsPath = app.get('root') + '/app/models/';

  ['profile-block', 'user', 'organisation', 'event', 'application'].forEach(function(model) {
    require(modelsPath + model);
  });
};
