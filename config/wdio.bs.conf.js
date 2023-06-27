const { localConf } = require('./local.conf')
const { bsConf } = require('./bs.conf')
require('dotenv').config()


exports.config = {
    user: `${process.env.BSUSER}`,
    key: `${process.env.BSKEY}`,
    hostname: 'hub.browserstack.com',
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.spec.js'
    ],
    capabilities: [{
        'app': `bs://${process.env.ANDROID_APP_ID}`,
        'device': 'Samsung Galaxy S22 Ultra',
        'os_version': '12.0',
        'projectName': "BrowserStack Samples",
        'buildName': 'browserstack build',
        'sessionName': 'BStack parallel webdriverio-appium',
    }],
    path: '/wd/hub',
    framework: 'mocha',
    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
   
    maxInstances: 1,
}