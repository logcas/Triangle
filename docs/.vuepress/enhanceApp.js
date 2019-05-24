import Button from '@/components/Button/Button.vue';
import Icon from '@/components/Icon/Icon.vue';
import Input from '@/components/Input/Input.vue';
import IconDisplayer from '@/components/Icon/IconDisplayer.vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import CheckboxGroup from '@/components/Checkbox-Group/CheckboxGroup.vue';
import Switch from '@/components/Switch/Switch.vue';
import Tag from '@/components/Tag/Tag.vue';
import Radio from '@/components/Radio';
import RadioGroup from '@/components/Radio-Group';
import RadioButton from '@/components/Radio-Button';
import Rate from '@/components/Rate';

const components = [
  Button,
  Icon,
  IconDisplayer,
  Input,
  Checkbox,
  CheckboxGroup,
  Switch,
  Tag,
  Radio,
  RadioGroup,
  RadioButton,
  Rate
]

export default ({
  Vue,
}) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}