'use strict';

const dependencies = [];

module.exports = {

  // register a promise dependency
  registerDependency: function(promise) {
    dependencies.push(promise);
  },

  // resolve when all registered dependencies have loaded (all promises in array have resolved)
  onDependenciesReady: function() {
    return Promise.all(dependencies)
  }

};
