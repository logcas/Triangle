<template>
  <div id="app">
    <tri-button iconName="search" iconButton style="margin-right: 5px" :loading="isLoading"></tri-button>
    <tri-button iconName="search" type="primary" :loading="isLoading" style="margin-right: 5px">测试按钮</tri-button>
    <tri-button iconName="search" type="error" :loading="isLoading" style="margin-right: 5px">测试按钮</tri-button>
    <tri-button iconName="search" type="warning" :loading="isLoading" style="margin-right: 5px">测试按钮</tri-button>
    <tri-button iconName="search" type="success" :loading="isLoading" style="margin-right: 5px">测试按钮</tri-button>
    <tri-icon icon-name="level" color="blue"/>
    <icon-displayer icon-name="search"/>
    <div>
      <h1>Input</h1>
      <tri-input v-model="msg" append-button placeholder="input something" iconPosition="back">
        <template slot="prepend">http://</template>
        <template slot="append">.com</template>
      </tri-input><br/><br/>
      <tri-input v-model="msg" iconName="search" status="info" size="large" append-button>
        <template slot="append">搜索</template>
      </tri-input><br/><br/>
      <tri-input v-model="msg" iconName="search" status="warning" size="small" append-button>
        <template slot="append">搜索</template>
      </tri-input><br/><br/>
      <tri-input v-model="msg" iconName="search" status="error" disabled/><br/><br/>
      <tri-input v-model="msg" iconName="search" status="success" readonly/><br/><br/>
      {{msg}}
    </div>
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
      isLoading: true,
      msg: 'hello,world'
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
