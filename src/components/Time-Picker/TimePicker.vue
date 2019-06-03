<template>
  <div class="tri-time-picker">
    <div class="tri-time-picker-fixed-options" v-if="type === 'fixed'">
      <tri-select
        :value="currentValue"
        @input="onInput"
        :placeholder="placeholder"
        @focus="onFocus"
        :disabled="disabled"
        :size="size"
      >
        <tri-select-option
          v-for="t in timeOptions"
          :key="t"
          :value="t"
          :label="t"
          :disabled="isDisabledTime(t)"
        />
      </tri-select>
    </div>
    <div class="tri-time-picker-no-fixed" v-if="type === 'no-fixed'" v-clickoutside="onBlur">
      <tri-input
        :value="currentValue2"
        :placeholder="placeholder"
        @focus="onFocus"
        :disabled="disabled"
        :size="size"
      />
      <transition name="slide-down">
        <tri-dropdown v-show="isShow">
          <tri-time
            :value="currentValue2"
            @input="onInput"
            :time-range="pOptions.timeRange"
            :min-time="pOptions.minTime"
          />
        </tri-dropdown>
      </transition>
    </div>
  </div>
</template>

<script>
import Select from "@/components/Select/Select.vue";
import SelectOption from "@/components/Select-Option/SelectOption.vue";
import Input from "@/components/Input/Input.vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import Time from "@/components/Time/Time.vue";
import clickoutside from "@/directives/clickoutside";
import { parseTimeString } from "@/utils";
// 时间选择器
// @group Form
export default {
  name: "tri-time-picker",
  components: {
    [Select.name]: Select,
    [SelectOption.name]: SelectOption,
    [Input.name]: Input,
    [Dropdown.name]: Dropdown,
    [Time.name]: Time
  },
  directives: { clickoutside: clickoutside },
  props: {
    // 选择器类型（固定时间，任意时间）
    type: {
      // `'fixed'` / `'no-fixed'`
      type: String,
      default: "fixed"
    },
    // 选择器选项
    pickerOptions: {
      type: Object,
      default: () => ({})
    },
    // 占位符
    placeholder: String,
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 尺寸
    size: {
      type: String,
      default: "normal"
    },
    // v-model 绑定值
    value: String
  },
  computed: {
    pOptions() {
      return Object.assign(
        {
          start: "00:00",
          step: "1:00",
          end: "23:00",
          timeRange: [["00:00:00", "23:59:59"]]
        },
        this.pickerOptions
      );
    },
    timeOptions() {
      let tOptions = [];
      let start = parseTimeString(this.pOptions.start);
      let end = parseTimeString(this.pOptions.end);
      let step = parseTimeString(this.pOptions.step);
      for (
        let t = [...start];
        t[0] < end[0] || (t[0] <= end[0] && t[1] <= end[1]);

      ) {
        let _t = t.map(i => (i < 10 ? "0" + i : `${i}`)).join(":");
        tOptions.push(_t);
        let h = Math.floor((t[1] = t[1] + step[1]) / 60);
        if (h) {
          t[0] += 1;
          t[1] %= 60;
        }
        t[0] += step[0];
      }
      return tOptions;
    }
  },
  data() {
    return {
      currentValue: "",
      currentValue2: "00:00:00",
      isShow: false
    };
  },
  methods: {
    isDisabledTime(t) {
      if (!this.pOptions.minTime) return false;
      let _minTime = parseTimeString(this.pOptions.minTime);
      let _t = parseTimeString(t);
      if (_t[0] < _minTime[0]) return true;
      if (_t[0] === _minTime[0] && _t[1] < _minTime[1]) return true;
      return false;
    },
    onFocus(e) {
      if (this.type === "no-fixed") this.isShow = true;
      // 获取焦点时触发
      // @arg event
      this.$emit("focus", e);
    },
    onBlur(e) {
      if (this.type === "no-fixed") this.isShow = false;
      // 失去焦点时触发
      // @arg event
      this.$emit("blur", e);
    },
    onInput(val) {
      if (this.type === "fixed") {
        this.currentValue = val;
      } else {
        this.currentValue2 = val;
      }
      // 选择 改变时触发
      // @arg 新的时间
      this.$emit("change", val);
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./TimePicker.scss";
</style>

