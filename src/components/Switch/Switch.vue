<template>
  <div class="tri-switch-wrapper" :class="[size]">
    <span class="text active" :style="activeTextStyle">{{ activeText }}</span>
    <div class="tri-switch" 
        :class="[size, {
          activate: isActive,
          disabled: disabled
        }]" 
        :style="stylesheet"
        @click="change">
      <div class="dot"></div>
    </div>
    <span class="text inactive" :style="inactiveTextStyle">{{ inactiveText }}</span>
  </div>
</template>

<script>
// 开关
// @group Form
export default {
  name: "tri-switch",
  model: {
    prop: ["isActive"],
    event: "change"
  },
  computed: {
    stylesheet() {
      return this.isActive
        ? { background: this.activeColor }
        : { background: this.inactiveColor };
    },
    activeTextStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
    inactiveTextStyle() {
      return !this.isActive ? { color: this.inactiveColor } : {};
    }
  },
  props: {
    // 尺寸大小
    // `'normal'` / `'small'` / `'large'`
    size: {
      type: String,
      default: "normal",
      validator(val) {
        return ["normal", "small", "large"].includes(val);
      }
    },
    // 是否激活
    isActive: {
      type: Boolean,
      default: false
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 激活时显式的文本
    activeText: String,
    // 非激活时显示的文本
    inactiveText: String,
    // 激活时的颜色
    activeColor: {
      type: String,
      default: "#6190E8"
    },
    // 非激活时的颜色
    inactiveColor: {
      type: String,
      default: "#BFBFBF"
    }
  },
  methods: {
    change() {
      if(this.disabled) return;
      // 激活状态更改时触发
      this.$emit("change", !this.isActive);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Switch.scss";
</style>
