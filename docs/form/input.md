---
title: Input 输入框
---

<script>
export default {
  data() {
    return {
      msg: '',
    }
  },
  mounted() {
    import('@/common/js/iconfont.js').then(() => {})
  }
}
</script>

# Input 输入框

## 基本使用

基本输入框，通过`v-model`指令绑定数据。

<tri-input type="text" v-model="msg" style="margin-bottom: 5px;" placeholder="输入提示"></tri-input>
<br/>
<tri-input type="text" v-model="msg" disabled style="margin-bottom: 5px;" placeholder="禁止状态"></tri-input>
<br/>
<tri-input type="password" v-model="msg"></tri-input>

```vue
<tri-input type="text" v-model="msg" placeholder="输入提示"></tri-input>
<tri-input type="text" v-model="msg" disabled placeholder="禁止状态"></tri-input>
<tri-input type="password" v-model="msg"></tri-input>
```

## 带状态的输入框

我们内置了不同的状态，你可以根据输入表单检验等情况设置不同的`status`属性。

<tri-input type="text" v-model="msg" style="margin-bottom: 5px;" placeholder="默认"></tri-input>
<br/>
<tri-input type="text" v-model="msg" status="info" style="margin-bottom: 5px;" placeholder="info"></tri-input>
<br/>
<tri-input type="text" v-model="msg" status="error" style="margin-bottom: 5px;" placeholder="error"></tri-input>
<br/>
<tri-input type="text" v-model="msg" status="warning" style="margin-bottom: 5px;" placeholder="warning"></tri-input>
<br/>
<tri-input type="text" v-model="msg" status="success" style="margin-bottom: 5px;" placeholder="success"></tri-input>
<br/>

```vue
<tri-input type="text" v-model="msg" placeholder="默认"></tri-input>
<tri-input type="text" v-model="msg" status="info" placeholder="info"></tri-input>
<tri-input type="text" v-model="msg" status="error" placeholder="error"></tri-input>
<tri-input type="text" v-model="msg" status="warning" placeholder="warning"></tri-input>
<tri-input type="text" v-model="msg" status="success" placeholder="success"></tri-input>
```

## 带图标的输入框

你可以通过传入`iconName`属性，指定一个图标到输入框。同时，你可以通过传入`iconPosition`属性值去指定这个图标到底在前面还是在后面。默认是在前，即`iconPosition = "pre"`。

<tri-input type="text" v-model="msg" placeholder="默认" icon-name="search" icon-position="pre" style="margin-bottom: 5px;"></tri-input>
<br>
<tri-input type="text" v-model="msg" placeholder="默认" icon-name="search" icon-position="back" style="margin-bottom: 5px;"></tri-input>

```vue
<tri-input type="text" v-model="msg" placeholder="默认" icon-name="search" icon-position="pre"></tri-input>
<tri-input type="text" v-model="msg" placeholder="默认" icon-name="search" icon-position="back"></tri-input>
```

## 组合输入框

很多时候，可能都需要组合输入框。比如你要用户输入一个URL，但不必输入协议和一级域名，或者你需要用户输入指定字段，又或者你需要组合一个搜索输入框......这时候，组合输入框就很有用处了。

<tri-input type="text" v-model="msg" icon-name="search" style="margin-bottom: 5px;"><template slot="prepend">http://</template><template slot="append">.com</template></tri-input>
<br>
<tri-input type="text" v-model="msg" icon-name="search" append-button style="margin-bottom: 5px;"><template slot="append">搜索</template></tri-input>
<br>
<tri-input type="text" v-model="msg">
  <template slot="prepend">Email</template>
</tri-input>

```vue
<tri-input type="text" v-model="msg" icon-name="search">
  <template slot="prepend">http://</template>
  <template slot="append">.com</template>
</tri-input>

<tri-input type="text" v-model="msg" icon-name="search" append-button>
  <template slot="append">搜索</template>
</tri-input>

<tri-input type="text" v-model="msg">
  <template slot="prepend">Email</template>
</tri-input>
```

## 三种尺寸

同样地，提供了最典型的三种尺寸。

<tri-input type="text" v-model="msg" size="small" style="margin-bottom: 5px;" placeholder="small"></tri-input>
<br/>
<tri-input type="text" v-model="msg" style="margin-bottom: 5px;" placeholder="normal"></tri-input>
<br/>
<tri-input type="text" v-model="msg" size="large" style="margin-bottom: 5px;" placeholder="large"></tri-input>
<br/>
<tri-input type="text" v-model="msg" icon-name="search" size="small" style="margin-bottom: 5px;"><template slot="prepend">http://</template><template slot="append">.com</template></tri-input>
<br>
<tri-input type="text" v-model="msg" icon-name="search" append-button style="margin-bottom: 5px;"><template slot="append">搜索</template></tri-input>
<br>
<tri-input type="text" v-model="msg" size="large">
  <template slot="prepend">Email</template>
</tri-input>

```vue
<tri-input type="text" v-model="msg" size="small" placeholder="small"/>

<tri-input type="text" v-model="msg" placeholder="normal"/>

<tri-input type="text" v-model="msg" size="large"  placeholder="large"/>

<tri-input type="text" v-model="msg" icon-name="search" size="small">
  <template slot="prepend">http://</template>
  <template slot="append">.com</template>
</tri-input>

<tri-input type="text" v-model="msg" icon-name="search" append-button>
  <template slot="append">搜索</template>
</tri-input>

<tri-input type="text" v-model="msg" size="large">
  <template slot="prepend">Email</template>
</tri-input>
```

## Props

<!-- @vuese:tri-input:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|type|输入框类型（原生属性）|`String`|`false`|"text"|
|value|输入框的值|`String`|`false`|""|
|status|输入框状态|`''` / `'info'` / `'success'` / `'error'` / `'warning'`|`false`|""|
|placeholder|placeholder（原生属性）|`String`|`false`|""|
|size|尺寸|`'normal'` / `'small'` / `'large'`|`false`|"normal"|
|iconName|图标名|`String`|`false`|-|
|iconPosition|图标位置（前或后）|`'pre'` / `'back'`|`false`|"pre"|
|disabled|禁止（原生属性）|`Boolean`|`false`|false|
|readonly|只读（原生属性）|`Boolean`|`false`|false|
|maxLength|maxLength（原生属性）|`Number`|`false`|-|
|minLength|minLength（原生属性）|`Number`|`false`|-|
|max|max（原生属性）|`Number`|`false`|-|
|min|min（原生属性）|`Number`|`false`|-|
|autofocus|自动获取焦点|`Boolean`|`false`|false|
|appendButton|前置按钮|`Boolean`|`false`|false|
|prependButton|后置按钮|`Boolean`|`false`|false|

<!-- @vuese:tri-input:props:end -->


## Events

<!-- @vuese:tri-input:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|input|输入时触发|参数为 value|
|blur|输入框失去焦点时触发|参数为 event|
|focus|输入框获取焦点时触发|参数为 event|
|click-prepend|点击前置插槽按钮时触发|参数为 event|
|click-append|点击后置插槽按钮时触发|参数为 event|

<!-- @vuese:tri-input:events:end -->


## Slots

<!-- @vuese:tri-input:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|prepend|前置插槽|-|
|append|后置插槽|-|

<!-- @vuese:tri-input:slots:end -->
