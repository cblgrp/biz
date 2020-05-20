import path from 'path'
import fs from 'fs'

export default {
  mode: 'spa',
  server: {
    https: {
      key: fs.readFileSync(path.resolve('/Users/Hubert', 'localhost.key')),
      cert: fs.readFileSync(path.resolve('/Users/Hubert', 'localhost.crt'))
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon_32.png' }]
    // script: [{
    //   src: 'https://js.stripe.com/v3',
    //   async: true,
    // defer: true
    // }],
  },
  globals: {
    id: 'cb_biz'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/less/app.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    dir: 'docs'
  }
}
