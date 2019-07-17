let env = process.env.NODE_ENV.trim()

let url = ""
switch (env){
  case 'mock':
    url = "http://localhost:8090"
    break;
  case 'dev':
    url = "http://localhost:8090"
    break;
  case 'production':
  default:
      url = ""
    break;
}
let server = {}
if(url) {
  server = {
    proxy:{
      "/service": {
        "target": url
      }
    }
  }
}
module.exports = {
  devServer: {
    port: 3000,
    ...server
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