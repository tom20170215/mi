// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/reset.scss'
import './css/style.css'
import axios from 'axios'
import BaiduMap from 'vue-baidu-map'
require('./mock')

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(BaiduMap, {
  ak: 'qwNUAc8RG0u8Gclg7jMA2K32GwwoxB5N'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
