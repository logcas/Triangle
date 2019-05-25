<template>
  <div class="tri-select-option-group">
    <slot name="header">
      <div class="option-group-header">{{ label }}</div>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
// 选择框的选择项组
// @group Form
export default {
  name: 'tri-select-option-group',
  props: {
    // 标签
    label: String
  }
}
</script>

<style lang="scss" scoped>
@import './SelectOptionGroup.scss';
</style>
