import Vue from 'vue'
import App from './App.vue'

import Triangle from '@/index.js';

Vue.use(Triangle);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
