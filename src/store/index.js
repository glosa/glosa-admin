import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      preURLAPI: '/api/v1/',
      loading: false,
      domain: '',
      token: '',
      authorization: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
