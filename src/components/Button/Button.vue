<template>
  <button
    @click="onClick"
    :class="['tri-button',type,size, {
    icon: iconButton
  }]"
    :disabled="disabled"
  >
    <tri-icon
      v-if="iconName"
      :iconName="iconName"
      :style="{
        marginRight: iconButton ? 0 : '3px',
        fontSize: '14px'
      }"
    />
    <slot v-if="!iconButton"></slot>
  </button>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";
// 按钮
// @group General
export default {
  name: "tri-button",
  components: {
    [Icon.name]: Icon
  },
  props: {
    // 按钮类型
    type: {
      // `''` / `'primary'` / `'warning'` / `'success'` / `'error'`
      type: String,
      default: "",
      validator(value) {
        return ["", "warning", "primary", "error", "success"].includes(value);
      }
    },
    // 禁止点击
    disabled: {
      type: Boolean,
      default: false
    },
    // 按钮尺寸
    size: {
      // `'normal'` / `'small'` / `'large'`
      type: String,
      default: "normal",
      validator(value) {
        return ["small", "normal", "large"].includes(value);
      }
    },
    // 是否为圆形图标按钮（会忽略文本）
    iconButton: {
      type: Boolean,
      default: false
    },
    // 图标名
    iconName: {
      type: String,
      default: ""
    },
  },
  methods: {
    onClick(e) {
      // 点击事件
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
