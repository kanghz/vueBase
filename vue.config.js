module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      "/service": {
        "target": 'http://localhost:8090'
      }
    }
  },
  css: {
    extract: true
  },
  configureWebpack: {
    optimization: {
      minimize: false,
      splitChunks: {
        chunks: 'initial',
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "common",
                chunks: "all"
            }
        }
      }
    },
  }
}