const path = require('path')

function resolve (pathUrl) {
  return path.join(__dirname, pathUrl)
}

module.exports = {
  publicPath: '/shopMall',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
