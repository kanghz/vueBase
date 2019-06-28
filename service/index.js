let express = require('express') //引入express模块
let router = require('./router');
let port = '8090';
let app = express();

app.use('/service', router)

console.log('http://localhost:%d',port);

app.listen(port);