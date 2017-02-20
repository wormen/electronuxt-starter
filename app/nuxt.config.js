const pkg = require('./package.json')

module.exports = {
  rootDir: `./app`,
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['../assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios']
  }
}
