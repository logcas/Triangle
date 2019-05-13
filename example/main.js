import Vue from 'vue'
import App from './App.vue'

import Button from '../src/components/Button';
import Icon from '../src/components/Icon';
Vue.use(Button);
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
