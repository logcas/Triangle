<template>
  <div class="tri-icon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${iconName}`"></use>
    </svg>
  </div>
</template>

<script>
// 图标
// @group General
export default {
  name: "tri-icon",
  props: {
    // 图标名
    iconName: {
      type: String,
      required: true
    },
    // 图标尺寸（单位px）
    size: {
      type: Number,
      default: 30
    },
    // 图标颜色
    color: {
      type: String,
      default: '#000'
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Icon.scss";
</style>
