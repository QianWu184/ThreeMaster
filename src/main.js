// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  Aside,
  Main,
  Header,
  Container,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui'
import sidermenu from './components/baseComponents/sidermenu'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/style/index.css'
Vue.component('el-aside', Aside)
Vue.component('el-main', Main)
Vue.component('el-header', Header)

Vue.component('el-container', Container)
Vue.component('el-row', Row)
Vue.component('el-col', Col)
Vue.component('el-menu', Menu)
Vue.component('el-submenu', Submenu)
Vue.component('el-menuitem', MenuItem)
Vue.component('el-menuitemgroup', MenuItemGroup)
Vue.component('sidermenu', sidermenu)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
