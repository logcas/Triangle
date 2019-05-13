import Button from './components/Button';
import Icon from './components/Icon';

import '@/common/js/iconfont.js';

const components = [
  Button,
  Icon
];

const install = function install(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Icon
};
