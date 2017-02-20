/**
 Copyright © Oleg Bogdanov
 Developer: Oleg Bogdanov
 Contacts: https://github.com/wormen
 ---------------------------------------------
 tools for packaging applications

 doc builder config
 https://github.com/electron-userland/electron-packager/blob/master/docs/api.md
 */

const packager = require('electron-packager'),
    appPkg = require('../app/package.json'),
    pkg = require('../package.json'),
    path = require('path')

let dir = `./release-builds`
let options = {
    name: appPkg.name,

    win32metadata: {
        ProductName: `${appPkg.name} /  v${pkg.version}`,
        CompanyName: `Nuxt Team`
    },

    dir: `./app`,
    out: `${dir}/dist`,
    overwrite: true,

    platform: `win32`,
    arch: `x64`,
    asar: false,
    prune: true,
    'build-version': pkg.version,
    download: {
        cache: `${dir}/.cache`
    },
    electronVersion: `1.4.15`,
    icon: `../src/icons/icon.ico`,
    ignore: [
        `.git`,
        `./node_modules`
    ]
}


console.log(`Starting pack application ...`);
packager(options, function done_callback(err, appPaths) {
    if(err) return console.log(`Build error -->`, err);
    console.log(`Build app complete`);
    console.log(`List packages -->\n`, appPaths);
})
