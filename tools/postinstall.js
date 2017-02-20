/**
 Copyright © Oleg Bogdanov
 Developer: Oleg Bogdanov
 Contacts: https://github.com/wormen
 ---------------------------------------------
 */

'use strict'

const path = require('path'),
    exec = require('child_process').execSync

let dir = path.join(__dirname, '..'),
    inst = install()
inst.next()

function* install(){
    console.log(`Installing modules`)
    yield exec(`npm install ${dir}`)

    console.log(`Installing modules for application`)
    yield exec(`npm install ${path.join(dir, 'app')}`)

    console.log(`Installed all modules`)
}