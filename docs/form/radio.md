# Radio 单选框

<script>
export default {
  data() {
    return {
      val1: '包年付款',
      val2: 1,
      val3: '清远',
      val4: '洛杉矶',
    }
  }
}
</script>

## 基本使用

如果你的选项不多，那么，你可以为每一个单选框传入相同的`v-model`属性。

<tri-radio v-model="val1" label="包年付款">包年付款</tri-radio>
<tri-radio v-model="val1" label="包月付款">包月付款</tri-radio>
<h4>{{ val1 }}</h4>

```vue
<tri-radio v-model="val1" label="包年付款">包年付款</tri-radio>
<tri-radio v-model="val1" label="包月付款">包月付款</tri-radio>
```

## 禁用

可以通过传入`disabled`属性禁用某些选项。

<tri-radio v-model="val2" :label="1" disabled>禁用且选中</tri-radio>
<tri-radio v-model="val2" :label="0" disabled>禁用但未选中</tri-radio>

```vue
<tri-radio v-model="val2" :label="1" disabled>禁用且选中</tri-radio>
<tri-radio v-model="val2" :label="0" disabled>禁用但未选中</tri-radio>
```

## 单选框组

如果你的选项很多，那么建议你用下拉选择框。但如果你执意要用单选框，那么，可以与组合`tri-radio-group`一起使用，这时候，你只需要传入一个`v-model`即可。

<tri-radio-group v-model="val3">
  <tri-radio label="广州">广州</tri-radio>
  <tri-radio label="深圳">深圳</tri-radio>
  <tri-radio label="清远">清远</tri-radio>
  <tri-radio label="北京">北京</tri-radio>
</tri-radio-group>
<h4>{{ val3 }}</h4>

```vue
<tri-radio-group v-model="val">
  <tri-radio label="广州">广州</tri-radio>
  <tri-radio label="深圳">深圳</tri-radio>
  <tri-radio label="清远">清远</tri-radio>
  <tri-radio label="北京">北京</tri-radio>
</tri-radio-group>
```

## 单选按钮

为了适应更多场景，这里还有单选按钮可以选择。用法和普通单选框一致，但它不能单独使用，必须与`tri-radio-group`一起使用。再某些方面，它比普通单选框在观感上更加直接。

<tri-radio-group v-model="val4">
  <tri-radio-button label="纽约">纽约机房</tri-radio-button>
  <tri-radio-button label="广州" disabled>广州机房</tri-radio-button>
  <tri-radio-button label="洛杉矶">洛杉矶机房</tri-radio-button>
  <tri-radio-button label="东京">东京机房</tri-radio-button>
</tri-radio-group>
<h4>{{ val4 }}</h4>

```vue
<tri-radio-group v-model="val">
  <tri-radio-button label="纽约">纽约机房</tri-radio-button>
  <tri-radio-button label="广州" disabled>广州机房</tri-radio-button>
  <tri-radio-button label="洛杉矶">洛杉矶机房</tri-radio-button>
  <tri-radio-button label="东京">东京机房</tri-radio-button>
</tri-radio-group>
```

## tri-radio

### Props

<!-- @vuese:tri-radio:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|value|v-model相关|`String` / `Number`|`false`|-|
|label|单选框的值|`String` / `Number`|`true`|-|
|disabled|禁用|`Boolean`|`false`|false|
|name|name（原生属性）|`String`|`false`|-|

<!-- @vuese:tri-radio:props:end -->


### Events

<!-- @vuese:tri-radio:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|input|-|-|

<!-- @vuese:tri-radio:events:end -->


### Slots

<!-- @vuese:tri-radio:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:tri-radio:slots:end -->

## tri-radio-group

### Props

<!-- @vuese:tri-radio-group:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|value|v-model 相关|`String` / `Number`|`false`|-|

<!-- @vuese:tri-radio-group:props:end -->


### Events

<!-- @vuese:tri-radio-group:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|radio-group-change|单选框组选择发生改变时触发|参数为选中的值|
|input|-|-|

<!-- @vuese:tri-radio-group:events:end -->


### Slots

<!-- @vuese:tri-radio-group:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:tri-radio-group:slots:end -->