<template>
  <div class="tri-input">
    <!--前置 slot -->
    <div
      class="slot prepend"
      :class="[size, prependButton ? 'slot-button' : '']"
      v-if="$slots.prepend"
    >
      <!-- 前置插槽 -->
      <slot name="prepend"></slot>
    </div>

    <tri-icon :class="iconPosition" :iconName="iconName" v-if="iconName"/>

    <input
      class="inputer"
      :class="[
      status, 
      size,
      iconName? 'has-icon' : '',
      {
        'append': $slots.append,
        'prepend': $slots.prepend
      }
    ]"
      :value="value"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :maxLength="maxLength"
      :minLength="minLength"
      :max="max"
      :min="min"
      :autofocus="autofocus"
      @input="input"
      @blur="blur"
      @focus="focus"
    >

    <!--后置 slot -->
    <div
      class="slot append"
      :class="[size, appendButton ? 'slot-button' : '']"
      v-if="$slots.append"
    >
      <!-- 后置插槽 -->
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
// 输入框
// @group General
export default {
  name: "tri-input",
  components: {
    [Icon.name]: Icon
  },
  props: {
    // 输入框类型（原生属性）
    type: {
      type: String,
      default: "text"
    },
    // 输入框的值
    value: {
      type: String,
      default: ""
    },
    // 输入框状态
    status: {
      // `''` / `'info'` / `'success'` / `'error'` / `'warning'`
      type: String,
      default: "",
      validator(val) {
        return ["", "info", "success", "error", "warning"].includes(val);
      }
    },
    // placeholder（原生属性）
    placeholder: {
      type: String,
      default: ""
    },
    // 尺寸
    size: {
      // `'normal'` / `'small'` / `'large'`
      type: String,
      default: "normal",
      validator(val) {
        return ["", "normal", "small", "large"].includes(val);
      }
    },
    // 图标名
    iconName: String,
    // 图标位置（前或后）
    iconPosition: {
      // `'pre'` / `'back'`
      type: String,
      default: "pre",
      validator(val) {
        return ["pre", "back"].includes(val);
      }
    },
    // 禁止（原生属性）
    disabled: {
      type: Boolean,
      default: false
    },
    // 只读（原生属性）
    readonly: {
      type: Boolean,
      default: false
    },
    // maxLength（原生属性）
    maxLength: Number,
    // minLength（原生属性）
    minLength: Number,
    // max（原生属性）
    max: Number,
    // min（原生属性）
    min: Number,
    // 自动获取焦点
    autofocus: {
      type: Boolean,
      default: false
    },
    // 前置按钮
    appendButton: {
      type: Boolean,
      default: false
    },
    // 后置按钮
    prependButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    input(e) {
      let value = e.target.value;
      // 输入时触发
      // @arg 参数为 value
      this.$emit("input", value);
    },
    blur(e) {
      // 输入框失去焦点时触发
      // @arg 参数为 event
      this.$emit("blur", e);
    },
    focus(e) {
      // 输入框获取焦点时触发
      // @arg 参数为 event
      this.$emit("focus", e);
    },
    clickPrependButton(e) {
      // 点击前置插槽按钮时触发
      // @arg 参数为 event
      this.$emit('click-prepend', e);
    },
    clickAppendButton(e) {
      // 点击后置插槽按钮时触发
      // @arg 参数为 event
      this.$emit('click-append', e);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Input.scss";
</style>
