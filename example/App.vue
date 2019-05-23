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
      </tri-input>
      <br>
      <br>
      <tri-input v-model="msg" iconName="search" status="info" size="large" append-button>
        <template slot="append">搜索</template>
      </tri-input>
      <br>
      <br>
      <tri-input v-model="msg" iconName="search" status="warning" size="small" append-button>
        <template slot="append">搜索</template>
      </tri-input>
      <br>
      <br>
      <tri-input v-model="msg" iconName="search" status="error" disabled/>
      <br>
      <br>
      <tri-input v-model="msg" iconName="search" status="success" readonly/>
      <br>
      <br>
      {{msg}}
    </div>
    <div>
      <h1>Checkbox</h1>
      <tri-checkbox v-model="isChecked">Hello,world</tri-checkbox>
      <tri-checkbox v-model="isChecked" disabled>禁用的</tri-checkbox>
      {{ isChecked }}
      <br>
      <tri-checkbox-group v-model="value">
        <tri-checkbox value="北京">北京</tri-checkbox>
        <tri-checkbox value="广州">广州</tri-checkbox>
        <tri-checkbox value="深圳">深圳</tri-checkbox>
        <tri-checkbox value="上海">上海</tri-checkbox>
      </tri-checkbox-group>
      <p>{{ value }}</p>
    </div>
    <div>
      <h1>Switch</h1>
      <tri-switch
        size="small"
        v-model="isActivate"
        disabled
        active-text="activate"
        inactive-text="unactivate"
      />
      <br>
      <br>
      <tri-switch
        v-model="isActivate"
        disabled
        active-color="#13CE66"
        inactive-color="#FF4949"
        active-text="activate"
        inactive-text="unactivate"
      />
      <br>
      <br>
      <tri-switch
        size="large"
        v-model="isActivate"
        disabled
        active-text="activate"
        inactive-text="unactivate"
      />
      <br>
      <br>
    </div>
    <div>
      <h1>Tag</h1>
      <tri-tag>标签一</tri-tag>
      <tri-tag closable @on-close="tagClose" value="标签一">标签一</tri-tag>
      <tri-tag type="primary">标签一</tri-tag>
      <tri-tag type="primary" closable>标签一</tri-tag>
      <tri-tag type="success">标签一</tri-tag>
      <tri-tag type="success" closable>标签一</tri-tag>
      <tri-tag type="error">标签一</tri-tag>
      <tri-tag type="error" closable>标签一</tri-tag>
      <tri-tag type="warning">标签一</tri-tag>
      <tri-tag type="warning" closable>标签一</tri-tag>
      <tri-tag type="warning" background-color="blue" text-color="red">标签一</tri-tag>
      <tri-tag type="warning" background-color="blue" text-color="red" closable>标签一</tri-tag>
    </div>
    <div>
      <h1>Radio</h1>
      <tri-radio v-model="radioVal" label="广州">广州</tri-radio>
      <tri-radio v-model="radioVal" label="深圳">深圳</tri-radio>
      <tri-radio v-model="radioVal" label="清远" disabled>清远</tri-radio>
      <tri-radio v-model="radioVal" label="北京">北京</tri-radio>
      {{ radioVal }}
      <br>
      <tri-radio-group v-model="radioVal2">
        <tri-radio-button label="广州">广州</tri-radio-button>
        <tri-radio-button label="深圳">深圳22</tri-radio-button>
        <tri-radio-button label="清远" disabled>清远</tri-radio-button>
        <tri-radio-button label="北京">北京</tri-radio-button>
      </tri-radio-group>
      <h1>{{ radioVal2 }}</h1>
    </div>

  </div>
</template>

<script>
import IconDisplayer from "../src/components/Icon/IconDisplayer.vue";
export default {
  name: "app",
  components: {
    [IconDisplayer.name]: IconDisplayer
  },
  data() {
    return {
      isLoading: true,
      msg: "hello,world",
      isChecked: true,
      value: ["广州", "深圳"],
      isActivate: false,
      radioVal: '清远',
      radioVal2: '清远',
    };
  },
  methods: {
    tagClose(e, val) {
      console.log('tag callback:', val);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
