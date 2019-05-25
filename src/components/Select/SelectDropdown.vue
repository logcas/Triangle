<template>
  <div class="tri-select-dropdown">
    <slot>
      <div class="empty-tip">
        <tri-icon icon-name="smile"/>
        <p class="text">暂无可选项</p>
      </div>
    </slot>
  </div>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue';
export default {
  name: 'tri-select-dropdown',
  components: {
    [Icon.name]: Icon
  }
}
</script>

<style lang="scss" scoped>
@import './SelectDropdown.scss';
</style>
