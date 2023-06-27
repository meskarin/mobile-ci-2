const { localConf } = require('./local.conf')
const { bsConf } = require('./bs.conf.js')

require('dotenv').config()

function getConfig(){
    switch(process.env.ENVIRONMENT){
        case 'local':  default:
            return localConf
        case 'browserstack':
            return bsConf
    }
}

exports.config =  getConfig()