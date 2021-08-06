module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        
      }
    }
  },
  devServer: {
    proxy: {
      '/x': {
        target: 'https://api.bilibili.com',
        onProxyReq(proxyReq) {
          proxyReq.setHeader('origin','https://www.bilibili.com')
          proxyReq.setHeader('referer','https://www.bilibili.com/')
        }
      }
    }
  }
}

