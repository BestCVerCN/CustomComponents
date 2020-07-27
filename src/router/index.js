import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EchartsLine from '../components/EchartsLine'
import CalendarPage from '../views/CalendarPage'
import TablePage from '../views/TablePage'
import PanelPage from '../views/PanelPage'
import UserCenter from '../views/UserCenter'
import Navigation from '../views/Navigation'
import Demo from '../views/Demo'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
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
  },
  // {
  //   path: '/usercenter',
  //   name: 'UserCenter',
  //   component: UserCenter
  // },
  {
    path: '/',
    name: 'Navigation',
    component: Navigation,
    children:[
      {
        path: '/home',
        name: 'Home',
        component: Home
      },{
        path: '/usercenter',
        name: 'UserCenter',
        component: UserCenter
      },
    ]
  },
  {
    path:'/demo',
    name:'Demo',
    component: Demo
  }
]

const router = new VueRouter({
  routes
})

export default router
