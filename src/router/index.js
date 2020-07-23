import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EchartsLine from '../components/EchartsLine'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/line',
    name: 'EchartsLine',
    component: EchartsLine
  }
]

const router = new VueRouter({
  routes
})

export default router
