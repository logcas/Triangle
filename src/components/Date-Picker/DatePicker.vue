<template>
  <div class="tri-date-picker" v-clickoutside="onBlur">
    <tri-input :value="dateString" :placeholder="placeholder" @focus="onFocus"/>
    <transition name="slide-down">
      <tri-dropdown v-show="isShow">
        <tri-date v-model="date" :type="type" @clear="onClear"/>
      </tri-dropdown>
    </transition>
  </div>
</template>

<script>
import Input from "@/components/Input/Input.vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import Date from "./Date";
import clickoutside from '@/directives/clickoutside';

const datePickerType = ['date', 'daterange', 'datemulti', 'month', 'year'];

// 日期选择框
// @group Form
export default {
  name: "tri-date-picker",
  directives: {
    'clickoutside': clickoutside
  },
  components: {
    [Input.name]: Input,
    [Dropdown.name]: Dropdown,
    [Date.name]: Date
  },
  props: {
    // 选择的类型
    type: {
      // `'date'` / `'daterange'` / `'datemulti'` / `'year'` / `'month'`
      type: String,
      default: 'date',
      validator(val) {
        return datePickerType.includes(val);
      }
    },
    // 占位符
    placeholder: String
  },
  data() {
    return {
      isShow: false,
      date: '',
      dateString: ''
    };
  },
  watch: {
    date(val) {
      switch(this.type) {
        case 'daterange':
          this.dateString = val[0].toLocaleDateString() + ' 至 ' + val[1].toLocaleDateString();
          break;
        case 'datemulti':
          let dates = val.map(date => {
            return date.toLocaleDateString();
          });
          this.dateString = dates.join(',');
          break;
        case 'month':
        case 'year':
          this.dateString = val;
          this.isShow = false;
          break;
        default:
          this.dateString = val.toLocaleDateString();
          this.isShow = false;
      }
      // 当日期选择更改时触发
      // @arg Date/Date[]/String
      this.$emit('input', val);
    }
  },
  methods: {
    onFocus() {
      this.isShow = true;
    },
    onBlur() {
      this.isShow = false;
    },
    onClear() {
      this.dateString = '';
      this.$emit('input', null);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./DatePicker.scss";
</style>

