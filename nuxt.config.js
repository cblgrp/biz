import path from 'path'
import fs from 'fs'
import payments from './static/payments.json'

export default {
  mode: 'spa',
  server: {
    https: {
      key: fs.readFileSync(
        path.resolve(
          '/Users/Hubert/Repos',
          'localhost-key.pem'
        )
      ),
      cert: fs.readFileSync(
        path.resolve(
          '/Users/Hubert/Repos',
          'localhost.pem'
        )
      )
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '···',
    titleTemplate: '%s | Cloudy Bay Lighting Biz',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description ||
          ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon_32x32.png'
      }
    ]
    // script: [{
    //   src: 'https://js.stripe.com/v3',
    //   async: true,
    // defer: true
    // }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/app.less'],
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
    '@nuxtjs/axios',
    [
      'vue-currency-filter/nuxt',
      {
        symbol: '',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: true
      }
    ]
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
