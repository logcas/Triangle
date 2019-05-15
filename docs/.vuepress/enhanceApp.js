import Button from '@/components/Button/Button.vue';
import Icon from '@/components/Icon/Icon.vue';
import Input from '@/components/Input/Input.vue';
import IconDisplayer from '@/components/Icon/IconDisplayer.vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import CheckboxGroup from '@/components/Checkbox-Group/CheckboxGroup.vue';

const components = [
  Button,
  Icon,
  IconDisplayer,
  Input,
  Checkbox,
  CheckboxGroup
]

export default ({
  Vue,
}) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}