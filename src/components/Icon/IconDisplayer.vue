<template>
  <div class="icon-displayer">
    <tri-icon :iconName="iconName"/>
    <div class="icon-name">
      {{ iconName }}
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue';
export default {
  name: 'icon-displayer',
  props: {
    iconName: {
      type: String
    }
  },
  components: {
    [Icon.name]: Icon
  }
}
</script>

<style lang="scss" scoped>
.icon-displayer {
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  width: 100px;
  display: inline-block;
  font-size: 30px;
  transition: all .2s ease-in;
  text-align: center;

  .icon-name {
    margin-top: 10px;
    font-size: 14px;
  }

  &:hover {
    background: #DEDEDE;
    cursor: pointer;
  }
}
</style>
