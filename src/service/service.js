import axios from 'axios'
import { Message } from 'element-ui';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
})

let service = axios.create({
  baseURL: '/service',
  timeout: 20000
})
service.interceptors.response.use(response => {
    if (response.data.code === 200) {
      return response.data.data;
    } else {
      Message.error(response.data.message)
    }
  },
  error => {
    Message.error(JSON.stringify(error))
    return Promise.reject(error)
  })

export default service;