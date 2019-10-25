import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/scss/common.scss'

import Login from './login.vue'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(Login)
}).$mount('#login')