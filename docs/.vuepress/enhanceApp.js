import Button from '@/components/Button/Button.vue';
import Icon from '@/components/Icon/Icon.vue';
import IconDisplayer from '@/components/Icon/IconDisplayer.vue';

const components = [
  Button,
  Icon,
  IconDisplayer
]

export default ({
  Vue,
}) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}