/**
 Copyright © Oleg Bogdanov
 Developer: Oleg Bogdanov
 Contacts: https://github.com/wormen
 ---------------------------------------------
 */

const {ipcRenderer} = require('electron')

setTimeout(()=>{
    // application initialized
    ipcRenderer.send(`ready:window`, `ok`)
}, 5000)