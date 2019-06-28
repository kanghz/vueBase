import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'link-active',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/system'
    }
  ]
})
