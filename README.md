![buildstatus](https://travis-ci.org/seanohollaren/async-ready.svg?branch=master)

# async-ready

async-ready allows you to register async dependencies and be alerted when all of them are ready.

## Installation

`npm install async-ready`


## Usage

Pass the module a promise which will be resolved once your dependency is ready.

Say you don't want your server to start listening for connections until a long-running call has completed as part of start-up.

##### someDependency.js

```javascript

const asyncReady = require('async-ready');

// register this async dependency as not yet ready (as soon as it's loaded into memory)
asyncReady.registerDependency( new Promise( (resolve) => {

      // perform long-running operation
      thisTakesSomeTime()

        // resolve the promise to alert anyone listening that this dependency is ready
        .then( () => resolve() );

    }));

```

##### app.js

```javascript

const asyncReady = require('async-ready');

// wait until all async dependencies are loaded before listening for connections
asyncReady.onDependenciesReady().then( () => {

  server.listen(8080);

});

```

## Multiple dependencies

You can track as many dependencies as you want.  Just register them normally as shown in the example above.
