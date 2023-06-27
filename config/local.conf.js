require('dotenv').config()

const { generalConf } = require('./general.conf')
const { join } = require('path')

let capabilities = {
    capabilities: [{
    "platformName": "Android",
    "platformVersion": "13",
    "deviceName": "R9QT802ZWRV",
    "automationName": "UiAutomator2",
    "app": join(process.cwd(), './app/android/loja-ebac.apk'),
    "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
    'newCommandTimeout': 240,
    'android': {
        'location': 'allow',
        'camera': 'allow',
        'storage': 'allow',
        'notification': 'allow'
      }
}]}

let localConf= {
    ...generalConf,
    ...capabilities,
    hostname: 'localhost',
    port: 4723,
    services: ['appium']
}

module.exports = {localConf}