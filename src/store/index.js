import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      url: '',
      token: '',
      preURLAPI: '/api/v1/',
      loading: false,
      toasts: [],
      toastLife: 5000,
      authorization: false
  },
  mutations: {
      loadingEnable (state) {
          state.loading = true
      },
      loadingDisable (state) {
          state.loading = false
      },
      autoLogin (state) {
          const myStorage = window.localStorage
          if (myStorage.getItem("url") !== null
               && myStorage.getItem("token") !== null) {
              state.url = myStorage.getItem("url")
              state.token = myStorage.getItem("token")
              state.authorization = true
              router.push({ name: 'Comments'})
          }
      },
      logIn (state, data) {
          // Save data
          const myStorage = window.localStorage
          myStorage.setItem('url', data.url)
          myStorage.setItem('token', data.token)
          // Load data
          this.commit('autoLogin')
      },
      logOut (state) {
          window.localStorage.clear();
          state.authorization = false
          router.push({ name: 'LogIn'})
      }
  },
  actions: {
      toastAdd ({ state }, data) {
          const posKill = state.toasts.push(data);
          setTimeout(() => {
              state.toasts = state.toasts.slice(posKill)
          }, state.toastLife)
      }
  },
  modules: {
  }
})
