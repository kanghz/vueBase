import router from './index'
import routerMap from './routerMap'
import store from '@/store'

import { getRouter, getCurrentRouter } from '@/utils/util.js'

router.beforeResolve( (to, from, next) => {
  if(store.getters.isInitaled){
    let isRouter = to.matched.length;
    if(!isRouter){
      next('/')
    }
    let path = to.path.replace(/(\/\w+)\/\w+$/,'$1')
    let router = store.getters.router;
    let currentRouter = getCurrentRouter(router, path)
    store.dispatch('setCurrentRouter', currentRouter)
  }
  if(!store.getters.roles){
    store.dispatch("getRoles").then( (roles) => {
      let myRouter = getRouter(roles, routerMap);
      store.dispatch('setRouter', myRouter)
      router.addRoutes(myRouter)
      next(to)
    })
  }else{
    next()
  }
})