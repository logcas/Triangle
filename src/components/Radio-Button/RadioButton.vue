<template>
  <div class="tri-select-button"
       :class="{
         selected: isChecked,
         disabled: disabled
       }"
       @click="onClick"
       >
    <slot>{{ label }}</slot>
  </div>
</template>

<script>
import Emitter from '@/mixins/Emitter';
export default {
  name: 'tri-radio-button',
  mixins: [Emitter],
  props: {
    label: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      value: null,
      isChecked: false,
    }
  },
  watch: {
    value(val) {
      this.isChecked = val === this.label;
    }
  },
  methods: {
    onClick() {
      if(this.disabled) return;
      this.dispatch('tri-radio-group', 'set-val', this.label);
    }
  },
  mounted() {
    this.$on('init', (val) => {
      this.value = val;
    });
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/style/SelectButton.scss';
</style>
