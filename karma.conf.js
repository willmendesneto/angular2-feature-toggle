var activateWatchInTests = process.argv.indexOf('--auto-watch') !== -1;
var testWebpackConfig = require('./config/webpack.test.js');

module.exports = function(config) {

  var configuration = {
    basePath: '',

    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [ ],

    /*
     * list of files / patterns to load in the browser
     *
     * we are building the test environment in ./spec-bundle.js
     */
    files: [
      { pattern: './config/spec-bundle.js', watched: false }
    ],

    preprocessors: {
      './config/spec-bundle.js': [
        'coverage',
        'webpack',
        'sourcemap'
      ]
    },

    // Webpack Config at ./webpack.test.js
    webpack: testWebpackConfig,

    //  coverage reporter configuration
    coverageReporter: {
      dir:'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' }
      ]
    },

    // Webpack please don't spam the console when running in karma!
    webpackServer: {
      // It suppress error shown in console, so it has to be set to false.
      quiet: false,
      // It suppress everything except error, so it has to be set to false as well
      // to see success build.
      noInfo: false,
      stats: {
        // Config for minimal console.log mess.
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    },
    // reporters: [ 'mocha', 'coverage' ],
    reporters: ['spec', 'coverage'],

    // web server port
    port: 9876,

    colors: true,

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    autoWatch: activateWatchInTests,

    browsers: [
      'PhantomJS'
    ],

    singleRun: !activateWatchInTests
  };

  config.set(configuration);
};
