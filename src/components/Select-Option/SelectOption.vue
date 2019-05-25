<template>
  <div class="tri-select-option" 
       :class="{ 
         disabled,
         selected: isSelected
        }"
        @click="setValue">
    <slot>
      {{ label || value }}
      <tri-icon v-show="isSelected" class="selected-icon" icon-name="selectfill"/>
    </slot>
  </div>
</template>

<script>
import Emitter from '@/mixins/Emitter';
import Icon from '@/components/Icon/Icon.vue';

// 选择框的选择项
// @group Form
export default {
  name: 'tri-select-option',
  mixins: [Emitter],
  components: {
    [Icon.name]: Icon
  },
  props: {
    // 选择项的值
    value: {
      type: String,
      required: true
    },
    // 选择项的标签
    label: String,
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isSelected: false,
    }
  },
  methods: {
    getItem() {
      return {
        label: this.label || this.value,
        value: this.value || this.label
      }
    },
    setValue() {
      if(this.disabled) return;
      this.dispatch('tri-select', 'set-val', this.getItem());
    }
  },
  mounted() {
    this.$on('init', (val, isMultiple, isInit) => {
      if(isMultiple && Array.isArray(val) && val.includes(this.value)){
        this.isSelected = true;
        isInit && this.dispatch('tri-select', 'set-val', this.getItem());
      } else if(!isMultiple && val === this.value) {
        this.isSelected = true;
        isInit && this.dispatch('tri-select', 'set-val', this.getItem());
      } else this.isSelected = false;
    });

    this.$on('send-option', () => {
      this.dispatch('tri-select', 'fetch-option', { value: this.value, label: this.label });
    });
  },
  beforeDestroy() {
    this.$off('init');
    this.$off('send-option');
  }
}
</script>

<style lang="scss" scoped>
@import './SelectOption.scss';
</style>
