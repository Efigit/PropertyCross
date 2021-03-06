(function() {
  'use strict';

  require.config({
    baseUrl: '..',
    paths: {
      famous: 'app/lib/famous',
      'jasmine': 'test/lib/jasmine/lib/jasmine-core/jasmine',
      'jasmine-html': 'test/lib/jasmine/lib/jasmine-core/jasmine-html',
      'boot': 'test/lib/jasmine/lib/jasmine-core/boot',
      'zepto': 'app/lib/zeptojs/src/zepto',
      'zepto.ajax': 'app/lib/zeptojs/src/ajax',
      'zepto.callbacks': 'app/lib/zeptojs/src/callbacks',
      'zepto.deferred': 'app/lib/zeptojs/src/deferred',
      'zepto.event': 'app/lib/zeptojs/src/event',

      'layouts':    'app/src/layouts',
      'models':     'app/src/models',
      'prototypes': 'app/src/prototypes',
      'viewmodels':    'app/src/viewmodels',
      'views':      'app/src/views',
      'utils':      'test/utils'
    },
    shim: {
      'jasmine': {
        exports: 'window.jasmineRequire'
      },
      'jasmine-html': {
        deps: ['jasmine'],
        exports: 'window.jasmineRequire'
      },
      'boot': {
        deps: ['jasmine', 'jasmine-html'],
        exports: 'window.jasmineRequire'
      },
      'zepto': {
        exports: 'Zepto'
      },
      'zepto.ajax': {
        deps: ['zepto.callbacks', 'zepto.deferred', 'zepto.event'],
        exports: 'Zepto'
      },
      'zepto.callbacks': ['zepto'],
      'zepto.deferred': ['zepto'],
      'zepto.event': ['zepto']
    }
  });


  // Define all of your specs here. These are RequireJS modules.
  var specs = [
    'test/spec/ApplicationState',
    'test/spec/BrowserHistory'
  ];

  // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
  // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
  // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
  // initialize the HTML Reporter and execute the environment.
  require(['boot'], function () {

    // Load the specs
    require(specs, function () {

      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();
    });
  });
})();