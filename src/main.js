import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

import fastclick from 'fastclick' //解决300毫秒延迟

// Vue.config.productionTip = false;

import 'common/stylus/index.styl'


fastclick.attach(document.body);

new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
