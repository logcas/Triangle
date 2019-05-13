<template>
  <div id="app">
    <tri-button iconName="search" iconButton style="margin-right: 5px" :loading="isLoading"></tri-button>
    <tri-button iconName="search" type="primary" :loading="isLoading" style="margin-right: 5px">测试按钮</tri-button>
    <tri-button iconName="search" type="error" :loading="isLoading" style="margin-right: 5px">测试按钮</tri-button>
    <tri-button iconName="search" type="warning" :loading="isLoading" style="margin-right: 5px">测试按钮</tri-button>
    <tri-button iconName="search" type="success" :loading="isLoading" style="margin-right: 5px">测试按钮</tri-button>
    <tri-icon icon-name="level" color="blue"/>
    <icon-displayer icon-name="search"/>
  </div>
</template>

<script>
import IconDisplayer from '../src/components/Icon/IconDisplayer.vue';
export default {
  name: 'app',
  components: {
    [IconDisplayer.name]: IconDisplayer
  },
  data() {
    return {
      isLoading: true
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
