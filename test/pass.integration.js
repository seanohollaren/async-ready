const asyncReady = require('../index');
const assert = require('assert');

// register a dependency which resolves after 1 second
asyncReady.registerDependency(new Promise((resolve) => {

  wait(1)
    .then((result) => resolve());

}));

// register a dependncy which resolves after 3 seconds
asyncReady.registerDependency(new Promise((resolve) => {

  wait(3)
    .then((result) => resolve());

}));

// assert that ready listener was called after dependencies resolved and there weren't any errors
asyncReady.onDependenciesReady()
  .then(() => {

    assert(true, 'Should resolve after dependencies are ready');

  })
  .catch((error) => {

    assert(!error, 'Shouldn\'t be any uncaught errors')

  });

// wait the specified number of seconds before resolving
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), seconds * 1000);
  });
}
