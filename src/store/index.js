import Vue from 'vue'
import Vuex from 'vuex'

import service from '@/service/getApi'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roles: null,
    moduleType: null,
    router: null,
    currentRouter: null,
    isInitaled: false
  },
  mutations: {
    roles(state, roles){
      Vue.set(state, 'roles', roles);
    },
    router(state, router){
      Vue.set(state, 'router', router);
      Vue.set(state, 'isInitaled', true);
    },
    currentRouter(state, router){
      Vue.set(state, 'currentRouter', router);
    }
  },
  actions: {
    getRoles({commit}){
      return service.getRoles().then( v => {
        commit("roles", v)
        return v
      })
    },
    setRouter({commit}, router){
      commit('router', router)
    },
    setCurrentRouter({commit}, router){
      commit('currentRouter', router)
    }
  },
  getters:{
    roles: state => state.roles,
    router: state => state.router,
    currentRouter: state => state.currentRouter,
    isInitaled: state => state.isInitaled
  }
})
