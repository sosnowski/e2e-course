exports.config = {
  baseUrl: 'http://localhost:8080',

  chromeOnly: true,
  seleniumServerJar: '../selenium/selenium-server-standalone-2.45.0.jar',
  chromeDriver: '../selenium/chromedriver.exe',

  jasmineNodeOpts: {
    // If true, display spec names.
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  },

  suites: {
    myfirst: '../tests/firstTest.e2e.js',
    //pop: '../tests/pageObjectsTests.e2e.js'
  }
}
