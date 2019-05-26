<template>
  <div class="tri-checkbox-group">
    <!-- 默认插槽，可放入<tri-checkbox>作为子元素 -->
    <slot></slot>
  </div>
</template>

<script>
// 选择器组
// @group Form
export default {
  name: 'tri-checkbox-group',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    // 选择器的值
    value: {
      type: Array,
      default: () => []
    },
    // name 表单用
    name: String
  },
  data() {
    return {
      children: []
    }
  },
  watch: {
    value() {
      this.mapChildren();
    }
  },
  methods: {
    getChildren() {
      this.$children.forEach(child => {
        if(child.$options.name === 'tri-checkbox') {
          this.children.push(child);
        }
      });
    },
    mapChildren() {
      this.children.forEach(child => {
        if(this.value.includes(child.value)) {
          child.setChecked(true);
        } else {
          child.setChecked(false);
        }
      });
    },
    toggleValue(value) {
      let newValue;
      if(this.value.includes(value)) {
        newValue = this.value.filter(val => val !== value);
      } else {
        newValue = [...this.value, value];
      }
      // 当选择发生变化时，会触发
      // @arg 返回新的值数组，newValue
      this.$emit('change', newValue);
      this.mapChildren();
    }
  },
  mounted() {
    this.getChildren();
    this.mapChildren();
  }
}
</script>