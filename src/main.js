import "./styles/reset.css"
import "./styles/border.css"
import 'amfe-flexible/index.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import qs from 'qs'
import axios from 'axios'

import {
  Button,
  Field,
  Form,
  Grid,
  Popup,
  GridItem,
  Tabbar,
  TabbarItem,
  Notify
} from 'vant';

Vue.use(Button);
Vue.use(Field);
Vue.use(Form);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Popup);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Notify);

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.qs = qs

fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
