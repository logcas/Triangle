<template>
  <div class="tri-radio-group">
     <slot></slot>
  </div>
</template>

<script>
import Emitter from '@/mixins/Emitter';
// 单选框组
// @group Form
export default {
  name: 'tri-radio-group',
  mixins: [Emitter],
  props: {
    // v-model 相关
    value: [String, Number]
  },
  watch: {
    value(val) {
      this.broadcast('tri-radio', 'init', val);
      this.broadcast('tri-radio-button', 'init', val);
      // 单选框组选择发生改变时触发
      // @arg 参数为选中的值
      this.$emit('radio-group-change', val);
    }
  },
  methods: {
    setRadio(val) {
      this.$emit('input', val);
    }
  },
  mounted() {
    this.broadcast('tri-radio', 'init', this.value);
    this.broadcast('tri-radio-button', 'init', this.value);
    this.$on('set-val', this.setRadio.bind(this));
  }
}
</script>

<style lang="scss" scoped>
@import './RadioGroup.scss';
</style>

