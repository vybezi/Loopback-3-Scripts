'use strict';

var path = require('path');
var app = require(path.resolve(__dirname, '../server'));
require('events').EventEmitter.prototype._maxListeners = 120;

var models = require(path.resolve(__dirname, '../model-config.json'));
var datasources = require(path.resolve(__dirname, '../datasources.json'));

function autoUpdateAll() {
  Object.keys(models).forEach(function(key) {
    if (typeof models[key].dataSource != 'undefined') {
      if (typeof datasources[models[key].dataSource] != 'undefined') {
        app.dataSources[models[key].dataSource].autoupdate(key, function(err) {
          if (err) throw err;
          console.log('Model ' + key + ' migrated');
        });
      }
    }
  });
  return;
}
autoUpdateAll();
