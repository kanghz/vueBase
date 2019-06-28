let express = require('express');
let router = express.Router();
let apiPath = require('../src/service/api').apiPath

let auth = require('./auth');
let Mock = require('mockjs') //引入mock模块

router.get(apiPath.fetchData, function (req, res) {
  res.json(Mock.mock({
    "code|1": [200],
    "message": "success",
    "data|5-10": [{
      "name|5-8": /[a-zA-Z]/,
      "id|+1": 1,
      "value|0-500": 20
    }]
  }));
});

router.get(apiPath.roles, function (req, res) {
  res.json(Mock.mock({
    "code|1": [200],
    "message": "success",
    "data": auth
  }));
});

module.exports = router;