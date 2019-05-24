<template>
  <div class="tri-rate" :class="{
    disabled
  }">
    <tri-icon v-for="index in count" 
              :key="index" 
              :iconName="iconName"
              @mouseover.native="onHover(index)"
              @mouseout.native="onMouseOut"
              @click.native="onClick(index)"
              :style="getStyle(index)"
    ></tri-icon>
    <span class="tri-rate-text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue';
// 评分
// @group Form
export default {
  name: 'tri-rate',
  components: {
    [Icon.name]: Icon
  },
  props: {
    // 激活时颜色
    activeColor: {
      type: String,
      default: '#ffc82c'
    },
    // 失活时颜色
    inactiveColor: {
      type: String,
      default: '#BFBFBF'
    },
    // 值， 与v-model相关
    value: {
      type: Number,
      default: 0
    },
    // 评分图标的个数，默认为5
    count: {
      type: Number,
      default: 5
    },
    // 图标名
    iconName: {
      type: String,
      default: 'favfill'
    },
    // 图标大小，单位为px
    size: {
      type: [Number, String],
      default: 20
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      currentRate: this.value,
      currentHover: 0,
      isHover: false,
    }
  },
  watch: {
    value(val) {
      this.isHover ? this.currentHover = val : this.currentRate = val;
    }
  },
  methods: {
    getStyle(index) {
      const style = {
        fontSize: this.size + 'px'
      };
      let color;
      let transform;
      if(this.isHover) {
        if(index <= this.currentHover) {
          color = this.activeColor;
          transform = 'scale(1.5)';
        } else {
          color = this.inactiveColor;
        }
      } else {
        if(index <= this.currentRate) {
          color = this.activeColor;
        } else {
          color = this.inactiveColor;
        }
      }
      style['color'] = color;
      style['transform'] = transform;
      return style;
    },
    onHover(index) {
      if(this.disabled) return;
      this.isHover = true;
      this.currentHover = index;
      this.$emit('input', this.currentHover);
      // hover 时改变评分触发
      // @arg 参数为 hover 时的评分
      this.$emit('on-hover-change', this.currentHover);
    },
    onMouseOut() {
      if(this.disabled) return;
      this.isHover = false;
      this.currentHover = 0;
      this.$emit('input', this.currentRate);
      this.$emit('on-hover-change', this.currentHover);
    },
    onClick(index) {
      if(this.disabled) return;
      this.currentRate = index;
      this.$emit('input', this.currentRate);
      // 点击改变评分时触发
      // @arg 参数为新的评分
      this.$emit('on-change', this.currentRate);
    },
  }
}
</script>

<style lang="scss" scoped>
@import './Rate.scss';
</style>
