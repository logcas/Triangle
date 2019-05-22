import Button from './components/Button';
import Icon from './components/Icon';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import CheckboxGroup from './components/Checkbox-Group';
import Switch from './components/Switch';
import Tag from './components/Tag';

const components = [
  Button,
  Icon,
  Input,
  Checkbox,
  CheckboxGroup,
  Switch,
  Tag
];

const install = function install(Vue) {
  components.forEach(component => {
    component.install(Vue);
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
