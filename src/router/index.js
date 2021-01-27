import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login.vue'
import Comments from '../views/Comments.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Home
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments
  }
]

const router = new VueRouter({
  routes
})

export default router
