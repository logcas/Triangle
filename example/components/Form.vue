<template>
  <form method="post" action="http://www.baidu.com/hello">
    <p>
      <span>Username:</span>
      <tri-input name="username" v-model="username"/>
    </p>
    <p>
      <span>Password:</span>
      <tri-input name="password" type="password" v-model="password"/>
    </p>
    <p>
      <span>Sex:</span>
        <tri-radio label="boy" name="sex" v-model="sex">男</tri-radio>
        <tri-radio label="girl" name="sex" v-model="sex">女</tri-radio>
    </p>
    <p>
      <span>Origin:</span>
      <tri-select v-model="origin" name="origin">
        <tri-select-option value="Beijing" label="北京"/>
        <tri-select-option value="Shanghai" label="上海"/>
        <tri-select-option value="Guangzhou" label="广州"/>
        <tri-select-option value="Shenzhen" label="深圳"/>
      </tri-select>
    </p>
    <p>
      <span>Hobby:</span>
      <tri-checkbox-group v-model="hobby" name="hobby">
        <tri-checkbox value="唱">唱</tri-checkbox>
        <tri-checkbox value="跳">跳</tri-checkbox>
        <tri-checkbox value="Rap">Rap</tri-checkbox>
        <tri-checkbox value="篮球">篮球</tri-checkbox>
      </tri-checkbox-group>
    </p>
    <p>
      <span>Adult?</span>
      <tri-switch v-model="isAdult" name="adult"/>
    </p>
    <p>
      <tri-button @click="getData">获取数据</tri-button>
    </p>
  </form>
</template>

<script>
export default {
  name: 'form-test',
  data() {
    return {
      username: '',
      password: '',
      sex: '',
      origin: [],
      hobby: [],
      isAdult: false,
    }
  },
  methods: {
    getData(e) {
      /*
      e.preventDefault();
      console.log(this.username);
      console.log(this.password);
      console.log(this.sex);
      console.log(this.origin);
      console.log(this.hobby);
      */
    }
  }
}
</script>