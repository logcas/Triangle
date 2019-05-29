<template>
  <div class="tri-dropdown" :style="stylesheet">
    <slot>
      <div class="empty-tip">
        <tri-icon icon-name="smile"/>
        <p class="text">暂无数据</p>
      </div>
    </slot>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";
export default {
  name: "tri-dropdown",
  computed: {
    stylesheet() {
      let o = {};
      if (this.width) o.width = this.width + "px";
      return o;
    }
  },
  props: {
    width: {
      type: [Number, String]
    }
  },
  components: {
    [Icon.name]: Icon
  }
};
</script>

<style lang="scss" scoped>
@import "./Dropdown.scss";
</style>
