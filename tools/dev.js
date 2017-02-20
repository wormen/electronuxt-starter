/**
 Copyright © Oleg Bogdanov
 Developer: Oleg Bogdanov
 Contacts: https://github.com/wormen
 ---------------------------------------------
 */

require('../app/constants')

process.env.NODE_ENV = 'development'

const
    path = require('path'),
    async = require('async'),
    spawn = require('child_process').spawn

let pids = [];

async.parallel([
    callback =>{
        // launch(`nodemon --exec babel-node -w ${ROOT_DIR}/app/server.js -w ${ROOT_DIR}/app/nuxt.config.js -w ${ROOT_DIR}/app/api/ ${ROOT_DIR}/app/server.js`, callback)

        let args = [
                `--exec`, `babel-node`,
                `-w`, `${ROOT_DIR}/app/server.js`,
                `-w`, `${ROOT_DIR}/app/nuxt.config.js`,
                `-w`, `${ROOT_DIR}/app/api/`,
                `${ROOT_DIR}/app/server.js`
            ]

        launch(`nodemon`, args)
    },

    callback =>{
        setTimeout(()=>{
            launch(`${ROOT_DIR}/node_modules/.bin/electron`, [`${ROOT_DIR}/app/`], true)
        }, 5000)
    }
])


let log = (str, isError = false)=>{
    console[isError ? 'error' : 'log'](str);
}

function launch(cmd, args, isMain = false){
    let app = spawn(cmd, args, {
        shell: true,
        env: process.env
    })

    pids.push(app.pid);

    app.stdout.on('data', (data) => {
        log(String(data));
    })

    app.stderr.on('data', (data) => {
        log(String(data), true);
    })

    app.on('close', (code) => {
        log(`child process exited with code ${code}`);

        for(let pid of pids)
            process.kill(pid);

    })
}