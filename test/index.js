const asyncReady = require('../index');
const assert = require('assert');

asyncReady.registerDependency(new Promise((resolve) => {

  wait(1)
    .then((result) => resolve());

}));

asyncReady.registerDependency(new Promise((resolve) => {

  wait(3)
    .then((result) => resolve());

}));

asyncReady.onDependenciesReady()
  .then(() => {

    console.log('Resolving after dependencies were ready');
    assert(false, 'Resolved after all dependencies were ready');

  });

function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), seconds * 1000);
  });
}
