<template>
  <div class="tri-radio-group">
     <slot></slot>
  </div>
</template>

<script>
import Emitter from '@/mixins/Emitter';
export default {
  name: 'tri-radio-group',
  mixins: [Emitter],
  props: {
    value: [String, Number]
  },
  watch: {
    value(val) {
      this.broadcast('tri-radio', 'init', val);
      this.broadcast('tri-radio-button', 'init', val);
    }
  },
  methods: {
    setRadio(val) {
      this.broadcast('tri-radio', 'init', val);
      this.broadcast('tri-radio-button', 'init', val);
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

