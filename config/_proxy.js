import api from './_api'

export default {
  '/xauth/': {
    target: api.xauth.host,
    pathRewrite: { '^/xauth/': '' },
    credentials: true
  },
  '/rs/': {
    target: api.rs.host,
    pathRewrite: { '^/rs/': '' },
    credentials: true
  }
}
