<template>
  <transition name="fade">
    <span class="tri-tag" :class="type" v-show="isVisible" :style="colorStyle">
      <slot></slot>
      <span @click.stop="onClose">
        <tri-icon class="close-btn" iconName="closefill" v-if="closable"></tri-icon>
      </span>
    </span>
  </transition>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";

const types = [
  'default',
  'primary',
  'warning',
  'error',
  'success'
];
// 标签
// @group general
export default {
  name: "tri-tag",
  components: {
    [Icon.name]: Icon
  },
  props: {
    // 回调时用到的值
    value: {
      type: [String, Boolean],
    },
    // 标签类型
    type: {
      type: String,
      default: "default",
      validator(val) {
        return types.includes(
          val
        );
      }
    },
    // 是否可关闭（显式关闭按钮）
    closable: {
      type: Boolean,
      default: false
    },
    // 自定义背景色
    backgroundColor: String,
    // 自定义文本色
    textColor: String,
  },
  computed: {
    colorStyle() {
      const style = {};
      if(this.backgroundColor) {
        style.backgroundColor = this.backgroundColor;
        style.borderColor = this.backgroundColor;
      }
      if(this.textColor) style.color = this.textColor;
      return style;
    }
  },
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    onClose(e) {
      this.isVisible = false;
      if(this.value === 'undefined') {
        // 标签关闭时触发的回调
        this.$emit('on-close', e);
      } else {
        this.$emit('on-close', e, this.value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Tag.scss";
</style>
