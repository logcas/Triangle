<template>
  <textarea class="tri-textarea"
            :style="stylesheet"
            :value="value"
            :name="name"
            :disabled="disabled"
            :readonly="readonly"
            :placeholder="placeholder"
            :autofocus="autofocus"
            :rows="rows"
            @input="onInput"
            @blur="$emit('blur', $event)"
            @focus="$emit('focus', $event)"
            ref="textarea"
            ></textarea>
</template>

<script>
import _resize from './resize';
// 文本框
// @group Form
export default {
  name: 'tri-textarea',
  props: {
    // 原生属性
    name: String,
    // v-model 绑定值
    value: String,
    // 原生属性
    placeholder: String,
    // 原生属性
    readonly: {
      type: Boolean,
      default: false,
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 自动获取焦点（原生属性）
    autofocus: {
      type: Boolean,
      default: false,
    },
    // 可变大小
    resize: {
      // `'none'` / `vertical` / `horizontal` / `both`
      type: String,
      default: 'vertical',
      validator(val) {
        return ['none', 'vertical', 'horizontal', 'both'].includes(val);
      }
    },
    // 最小行数（ autoresize时生效）
    minRow: {
      type: Number,
      default: 1,
    },
    // 最大行数（ autoresize时生效）
    maxRow: Number,
    // 自适应高度
    autoresize: {
      type: Boolean,
      default: false,
    },
    // 原生属性
    rows: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      height: 52, // default
    }
  },
  computed: {
    stylesheet() {
      let o = {};
      if(this.autoresize) o.height = this.height + 'px';
      o.resize = this.resize;
      return o;
    }
  },
  watch: {
    value() {
      this.setAutoresize();
    }
  },
  methods: {
    onInput(e) {
      let val = e.target.value;
      this.$emit('input', val);
    },
    calculateHeight() {
      this.height = _resize(this.$refs.textarea, this.minRow, this.maxRow);
      console.log(this.height);
    },
    setAutoresize() {
      if(!this.autoresize) return;
      this.$nextTick(() => {
        this.calculateHeight();
      });
    }
  },
  mounted() {
    this.setAutoresize();
  }
}
</script>

<style lang="scss">
@import './Textarea.scss';
</style>