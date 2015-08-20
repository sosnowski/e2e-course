exports.config = {
  baseUrl: 'http://localhost:8080',

  seleniumServerJar: '../selenium/selenium-server-standalone-2.45.0.jar',
  chromeDriver: '../selenium/chromedriver.exe',

  suites: {
    myfirst: '../tests/firstTest.e2e.js',
    //pop: '../tests/pageObjectsTests.e2e.js'
  },
}
