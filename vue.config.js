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
      splitChunks: {
        automaticNameDelimiter: '-',
        cacheGroups: {
          vue: {
            test: /vue/,
            name: "vue",
            chunks: "all"
          },
          element: {
            test: /element-ui/,
            name: "element",
            chunks: "all"
          }
        }
      }
    },
  }
}