/**
 Copyright © Oleg Bogdanov
 Developer: Oleg Bogdanov
 Contacts: https://github.com/wormen
 ---------------------------------------------
 */

const path = require('path')
const sysconfig = require('./config')

process.env.HOST = sysconfig.host
process.env.PORT = sysconfig.port

global.IS_DEV = (process.env.NODE_ENV === 'development')



global.ROOT_DIR = path.join(__dirname, '..') // the application root directory
if(__dirname.includes(`resources`))
    ROOT_DIR = ROOT_DIR.split(`${path.sep}resources`)[0]

global.DATA_DIR = path.join(ROOT_DIR, 'data') // directory for application data

// -------------------

global.$Core = require('./core')

