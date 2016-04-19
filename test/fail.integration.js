const asyncReady = require('../index');
const assert = require('assert');

// register dependency which resolves after 1 second
asyncReady.registerDependency(new Promise((resolve, reject) => {

  wait(1)
    .then((result) => resolve());

}));

// register dependency which rejects after 3 seconds
asyncReady.registerDependency(new Promise((resolve, reject) => {

  wait(3)
    .then((result) => reject('rejecting'));

}));

// assert that reject handler gets called
asyncReady.onDependenciesReady()
  .then(() => {},
    (error) => {

      assert(error, 'Should be rejected');

    })
  .catch((error) => {

    assert(!error, 'Shouldn\'t be any uncaught errors');

  });

// wait the specified number of seconds before resolving
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), seconds * 1000);
  });
}
