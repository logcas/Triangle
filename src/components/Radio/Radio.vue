<template>
  <span class="tri-radio" :class="{ disabled: disabled }" @click="onInput">
    <input type="radio"
           @input="onInput"
           :disabled="disabled"
           :checked="isChecked"
           :name="name"
           :value="value"
           @focus="$emit('focus', $event)"
           @blur="$emit('blue', $event)"
           />
    <span class="tri-radio-slot">
      <slot></slot>
    </span>
  </span>
</template>

<script>
import Emitter from '@/mixins/Emitter';
// 单选框
// @group Form
export default {
  name: 'tri-radio',
  mixins: [Emitter],
  props: {
    // v-model相关
    value: [String, Number],
    // 单选框的值
    label: {
      type: [String, Number],
      required: true
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // name（原生属性）
    name: String,
  },
  data() {
    return {
      currentValue: this.value,
      isChecked: this.value === this.label,
      isGroup: false,
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.isChecked = val === this.label;
    }
  },
  methods: {
    onInput() {
      if(this.disabled) return;
      this.$emit('input', this.label);
      if(this.isGroup) {
        this.dispatch('tri-radio-group', 'set-val', this.label);
      }
    },
  },
  mounted() {
    this.$on('init', (val) => {
      this.currentValue = val;
      this.isGroup = true;
    });
  }
}
</script>

<style lang="scss" scoped>
@import './Radio.scss';
</style>


