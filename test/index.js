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

  })
  .catch((error) => {

    console.dir(error);

  });

// wait the specified number of seconds before resolving
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), seconds * 1000);
  });
}
