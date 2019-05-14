import Button from './components/Button';
import Icon from './components/Icon';
import Input from './components/Input';

import '@/common/js/iconfont.js';

const components = [
  Button,
  Icon,
  Input
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
