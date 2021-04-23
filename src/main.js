// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './tools/vant'
import './tools/http'

Vue.config.productionTip = false
// 设置全局基础路由

Vue.prototype.$imgBaseUrl ='http://localhost:3000'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
