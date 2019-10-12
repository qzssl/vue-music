import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import fastclick from 'fastclick' // 解决300毫秒延迟

import vueLazyload from 'vue-lazyload'

// Vue.config.productionTip = false;

import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.use(vueLazyload, {
  loading: require('common/images/default.png')
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
