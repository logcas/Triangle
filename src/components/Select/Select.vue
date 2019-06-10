<template>
  <div class="tri-select" :class="{'focus': isFocus, 'disabled': disabled}" ref="baseRef" v-clickoutside="inputBlur">
    <div class="tri-select-wrapper" @click="selectFocus">
      <div
        class="tri-select-multiple"
        v-if="multiple"
        v-show="currentItems && currentItems.length !== 0"
      >
        <tri-tag
          v-for="item in currentItems"
          :key="item.value"
          type="primary"
          style="margin: 2px;"
          @on-close="removeTag(item)"
          closable
        >{{ item.label }}</tri-tag>
      </div>
      <input
        class="tri-select-input"
        :style="inputStyle"
        :name="name"
        type="text"
        ref="inputRef"
        @focus="inputFocus"
        @input="onInput"
        :value="currentLabel"
        :placeholder="placeholder"
        :readonly="!filterable"
        :disabled="disabled"
      >
      <tri-icon class="tri-select-icon" :class="{'reverse': isFocus}" icon-name="down"/>
    </div>
    <transition :name="slideDown ? 'slide-down' : 'slide-up'">
      <tri-select-dropdown
        :class="slideDown ? 'slide-down' : 'slide-up'"
        v-show="isFocus && (!filterable || !currentLabel)"
      >
        <slot></slot>
      </tri-select-dropdown>
    </transition>
    <transition :name="slideDown ? 'slide-down' : 'slide-up'">
      <tri-select-dropdown
        :class="slideDown ? 'slide-down' : 'slide-up'"
        v-show="isFocus && (filterable && currentLabel)"
      >
        <tri-select-option
          v-for="item in filtedItems"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></tri-select-option>
      </tri-select-dropdown>
    </transition>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";
import Dropdown from "./SelectDropdown";
import Emitter from "@/mixins/Emitter";
import Tag from "@/components/Tag/Tag.vue";
import SelectOption from "@/components/Select-Option/SelectOption.vue";
import { debounce } from "@/utils";
import clickOutSide from '@/directives/clickoutside';
// 选择框
// @group Form
export default {
  name: "tri-select",
  mixins: [Emitter],
  directives: {
    'clickoutside': clickOutSide
  },
  components: {
    [Icon.name]: Icon,
    [Dropdown.name]: Dropdown,
    [Tag.name]: Tag,
    [SelectOption.name]: SelectOption
  },
  props: {
    // 表单的项 name（原生属性）
    name: String,
    // v-model 绑定值
    value: [String, Array],
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 占位符
    placeholder: {
      type: String,
      default: "请选择"
    },
    // 是否为可搜索选择框
    filterable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputStyle() {
      if (
        !this.multiple ||
        !this.currentValue ||
        (Array.isArray(this.currentValue) && this.currentValue.length === 0)
      ) {
        return {};
      }
      return {
        position: "absolute",
        width: 0,
        height: 0,
        padding: 0
      };
    },
    filtedItems() {
      return this.allItems.filter(
        ({ label }) => label.indexOf(this.currentLabel) !== -1
      );
    }
  },
  data() {
    return {
      isFocus: false,
      slideDown: true,
      currentValue: this.value,
      currentLabel: "",
      currentItems: [],
      // for filterable
      allItems: []
    };
  },
  methods: {
    inputFocus(e) {
      this.isFocus = true;
      // 当 input 获取焦点时触发
      // @arg event
      this.$emit("focus", e);
    },
    inputBlur(e) {
      this.isFocus = false;
      // 当 input 失去焦点时触发
      // @arg event
      this.$emit("blur", e);
    },
    onInput(e) {
      this.currentLabel = e.target.value;
      this.setValue({ value: this.currentLabel, label: this.currentLabel });
    },
    selectFocus(e) {
      if (this.disabled) return;
      this.$refs.inputRef.focus();
    },
    setValue(item) {
      const { value, label } = item;
      if (this.multiple) {
        this.currentValue || (this.currentValue = []);
        let idx = -1;
        let vals = this.currentValue;
        let len = vals.length;
        for (let i = 0; i < len; ++i) {
          if (vals[i] === value) {
            idx = i;
            break;
          }
        }
        if (idx === -1) {
          vals.push(value);
          this.currentItems.push({ value, label });
        } else {
          vals.splice(idx, 1);
          this.currentItems = this.currentItems.filter(
            item => item.value !== value
          );
        }
      } else {
        this.isFocus = false;
        this.currentValue = value;
        this.currentLabel = label;
      }
      this.$emit("input", this.currentValue);
      // 选项改变时触发
      // @arg 当前选项的值
      this.$emit("change", this.currentValue);
      this.broadcast(
        "tri-select-option",
        "init",
        this.currentValue,
        this.multiple,
        false
      );
    },
    fetchOption(item) {
      this.allItems.push(item);
    },
    removeTag(item) {
      // 多选时标签移除的时候触发
      // @arg 移除的标签
      this.$emit("remove-tag", item);
      this.setValue(item);
    }
  },
  created() {
    this.onInput = debounce(this.onInput, 500);
  },
  mounted() {
    // 控制 dropdown 在上方显示还是下方显示
    // 默认为下方显示，如果下方空间不足
    // 则调整为从上方显示
    const { bottom, height } = this.$refs.baseRef.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.body.clientHeight;
    if (clientHeight - scrollTop - bottom <= height) this.slideDown = false;

    // bind event emitter
    this.$on("set-val", this.setValue.bind(this));
    this.broadcast(
      "tri-select-option",
      "init",
      this.currentValue,
      this.multiple,
      true
    );

    // if filterable
    if (!this.filterable) return;
    this.$on("fetch-option", this.fetchOption.bind(this));
    this.broadcast("tri-select-option", "send-option");
  },
  beforeDestroy() {
    this.$off("set-val");
    this.$off("fetch-option");
  }
};
</script>

<style lang="scss" scoped>
@import "./Select.scss";
</style>
