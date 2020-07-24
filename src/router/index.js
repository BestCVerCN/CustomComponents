import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EchartsLine from '../components/EchartsLine'
import CalendarPage from '../views/CalendarPage'
import TablePage from '../views/TablePage'
import PanelPage from '../views/PanelPage'

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
  },
  {
    path: '/calendar',
    name: 'CalendarPage',
    component: CalendarPage
  },
  {
    path: '/table',
    name: 'TablePage',
    component: TablePage
  },
  {
    path: '/panel',
    name: 'PanelPage',
    component: PanelPage
  }
]

const router = new VueRouter({
  routes
})

export default router
