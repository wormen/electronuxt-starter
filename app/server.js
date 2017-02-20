'use strict'

require('./constants')

const Nuxt = require('nuxt'),
    http = require('http'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = require('express')()

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(cookieParser())


// Import API Routes
app.use('/api', require('./api/index'))

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js')

// Init Nuxt.js
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (IS_DEV) {
    nuxt.build()
        .catch((error) => {
            console.error(error) // eslint-disable-line no-console
            process.exit(1)
        })
}

// server
let server = http.createServer(app).listen(process.env.PORT, process.env.HOST, ()=> {
    let _host = process.env.HOST + ':' + process.env.PORT;
    console.log(`Server listening on ${_host}`) // eslint-disable-line no-console

    $Core.emit(`server:ready`, _host)
});

