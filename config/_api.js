export default {
  // 资源服务端地址配置
  host:
    process.env.NODE_ENV === 'production'
      ? 'https://api.bigseller.hitoshop.com'
      : 'http://127.0.0.1:7002'
}
