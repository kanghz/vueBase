module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      "/service":{
        "target": 'http://localhost:8090'
      }
    }
  },
  css: {
    extract: true
  }
}