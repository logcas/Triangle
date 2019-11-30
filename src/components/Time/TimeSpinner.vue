<template>
  <div class="tri-time-spinner" ref="root" @scroll="onScroll" @mouseleave="onBlur">
    <ul class="tri-time-scrollbar">
      <li
        class="tri-time-scrollbar-item"
        v-for="(i, idx) in items"
        :key="i"
        :class="{
        active: !isDisabled(i) && activedIndex === idx,
        disabled: isDisabled(i)
      }"
        @click="setIndex(idx, true)"
      >{{ i }}</li>
    </ul>
  </div>
</template>

<script>
const ITEM_HEIGHT = 32;
const PADDING_TOP = 2.5 * ITEM_HEIGHT;

export default {
  name: "tri-time-spinner",
  props: {
    items: Array,
    value: String,
    range: Array
  },
  data() {
    return {
      activedIndex: -1,
      reset: false
    };
  },
  watch: {
    value(val) {
      let idx = this.items.indexOf(val);
      this.setIndex(idx);
    },
    activedIndex() {
      if (this.reset) {
        this.reset = false;
        return;
      }
      this.$emit("input", this.items[this.activedIndex]);
    }
  },
  methods: {
    onScroll() {
      let root = this.$refs.root;
      let scrollTop = root.scrollTop;
      let idx = Math.floor(scrollTop / ITEM_HEIGHT);
      if(this.isDisabled(this.items[idx])) return;
      this.activedIndex = idx;
    },
    onBlur() {
      let root = this.$refs.root;
      this.$nextTick(() => {
        root.scrollTop = this.activedIndex * ITEM_HEIGHT;
      });
    },
    setIndex(index, render, force = false) {
      if(this.isDisabled(this.items[index]) && !force) return;
      this.activedIndex = index;
      if (render) {
        this.$nextTick(() => {
          this.$refs.root.scrollTop = this.activedIndex * ITEM_HEIGHT;
        });
      }
    },
    isDisabled(t) {
      if(!this.range) return false;
      return !this.range.some(([start, end]) => t >= start && t <= end);
    }
  },
  created() {
    this.activedIndex = this.items.indexOf(this.value);
    this.$on('clear', () => {
      this.reset = true;
      this.setIndex(0, true, true);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "./Time.scss";
</style>

