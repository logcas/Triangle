<template>
  <div class="tri-checkbox">
    <span class="tri-checkbox-input">
      <input class="checker" 
            :name="name"
            :checked="isChecked" 
            type="checkbox" 
            @change="change"
            :value="label"
            :disabled="disabled"/>
    </span>
    <label class="tri-checkbox-label">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script>
// 选择框
// @group Form
export default {
  name: 'tri-checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    // name(原生属性)
    name: String,
    // 是否选择（原生属性）
    checked: Boolean,
    // 值
    value: String,
    // 标签
    label: {
      type: String,
      default: '',
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isChecked: this.checked,
      parent: null
    }
  },
  watch: {
    checked() {
      this.isChecked = this.checked;
    }
  },
  methods: {
    change(e) {
      this.parent && this.parent.toggleValue(this.value);
      this.$emit('change', e.target.checked);
    },
    setChecked(checked) {
      this.isChecked = checked;
    },
  },
  mounted() {
    if(this.$parent.$options.name === 'tri-checkbox-group') {
      this.parent = this.$parent;
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Checkbox.scss';
</style>
