import TimePicker from './TimePicker.vue';

TimePicker.install = function (Vue) {
  Vue.component(TimePicker.name, TimePicker);
};

export default TimePicker;