# Select 选择框

<script>
export default {
  data() {
    return {
      val1: '',
      val2: 'Beijing',
      val3: '',
      val4: [],
      val5: '',
    }
  }
}
</script>

## 基本的单选

在`<tri-select>`组件中通过插槽传入若干个`<tri-select-option>`，然会在使用`v-model`进行双向绑定，即可得到一个单选框。

如果你只传`value`以及`label`的其中一个，那么，它会自动地把`value`以及`label`都设置成同一个。

<tri-select v-model="val1">
  <tri-select-option value="Beijing"/>
  <tri-select-option value="Shanghai" label="上海"/>
  <tri-select-option label="广州"/>
  <tri-select-option value="Shenzhen" label="深圳"/>
</tri-select>

选中的值：{{ val1 }}

```vue
<tri-select v-model="val1">
  <tri-select-option value="Beijing" label="北京"/>
  <tri-select-option value="Shanghai" label="上海"/>
  <tri-select-option value="Guangzhou" label="广州"/>
  <tri-select-option value="Shenzhen" label="深圳"/>
</tri-select>
```

## 禁用

向`<tri-select>`传入`disabled`会使整个选择框禁用。

<tri-select v-model="val2" disabled>
  <tri-select-option value="Beijing" label="北京"/>
  <tri-select-option value="Shanghai" label="上海"/>
  <tri-select-option value="Guangzhou" label="广州"/>
  <tri-select-option value="Shenzhen" label="深圳"/>
</tri-select>

```vue
<tri-select v-model="val" disabled>
  <tri-select-option value="Beijing" label="北京"/>
  <tri-select-option value="Shanghai" label="上海"/>
  <tri-select-option value="Guangzhou" label="广州"/>
  <tri-select-option value="Shenzhen" label="深圳"/>
</tri-select>
```

而如果向`tri-select-option`传入`disabled`，则只会禁用单个选项。

<tri-select v-model="val2">
  <tri-select-option value="Beijing" label="北京"/>
  <tri-select-option value="Shanghai" label="上海" disabled/>
  <tri-select-option value="Guangzhou" label="广州"/>
  <tri-select-option value="Shenzhen" label="深圳"/>
</tri-select>

```vue
<tri-select v-model="val">
  <tri-select-option value="Beijing" label="北京"/>
  <tri-select-option value="Shanghai" label="上海" disabled/>
  <tri-select-option value="Guangzhou" label="广州"/>
  <tri-select-option value="Shenzhen" label="深圳"/>
</tri-select>
```

## 选项分组

使用`<tri-select-option-group>`包裹选项，然后传入`label`，可以对选项进行分组。

<tri-select v-model="val3">
<tri-select-option-group label="国内一线城市">
<tri-select-option value="Beijing" label="北京"/>
<tri-select-option value="Shanghai" label="上海" disabled/>
<tri-select-option value="Guangzhou" label="广州"/>
<tri-select-option value="Shenzhen" label="深圳"/> 
</tri-select-option-group>
<tri-select-option-group label="其他城市">
<tri-select-option value="Qingyuan" label="清远"/>
<tri-select-option value="Hangzhou" label="杭州"/>
<tri-select-option value="Suzhou" label="苏州"/>
<tri-select-option value="LA" label="洛杉矶"/>
<tri-select-option value="Canada" label="加拿大"/>
</tri-select-option-group>
</tri-select>

```vue
<tri-select v-model="val3">
  <tri-select-option-group label="国内一线城市">
    <tri-select-option value="Beijing" label="北京"/>
    <tri-select-option value="Shanghai" label="上海" disabled/>
    <tri-select-option value="Guangzhou" label="广州"/>
    <tri-select-option value="Shenzhen" label="深圳"/> 
  </tri-select-option-group>
  <tri-select-option-group label="其他城市">
    <tri-select-option value="Qingyuan" label="清远"/>
    <tri-select-option value="Hangzhou" label="杭州"/>
    <tri-select-option value="Suzhou" label="苏州"/>
    <tri-select-option value="LA" label="洛杉矶"/>
    <tri-select-option value="Canada" label="加拿大"/>
  </tri-select-option-group>
</tri-select>
```

## 多选

通过传入`multiple`属性可以把选择框变成多选，选中的选项会以标签的形式展示。

必须注意的是，这时候`v-model`的值是一个`value`数组。

<tri-select v-model="val4" multiple>
<tri-select-option-group label="国内一线城市">
<tri-select-option value="Beijing" label="北京"/>
<tri-select-option value="Shanghai" label="上海"/>
<tri-select-option value="Guangzhou" label="广州"/>
<tri-select-option value="Shenzhen" label="深圳"/> 
</tri-select-option-group>
<tri-select-option-group label="其他城市">
<tri-select-option value="Qingyuan" label="清远"/>
<tri-select-option value="Hangzhou" label="杭州"/>
<tri-select-option value="Suzhou" label="苏州"/>
<tri-select-option value="LA" label="洛杉矶"/>
<tri-select-option value="Canada" label="加拿大"/>
</tri-select-option-group>
</tri-select>

选中的值：{{ val4 }}

```vue
<tri-select v-model="val" multiple>
  <tri-select-option-group label="国内一线城市">
    <tri-select-option value="Beijing" label="北京"/>
    <tri-select-option value="Shanghai" label="上海"/>
    <tri-select-option value="Guangzhou" label="广州"/>
    <tri-select-option value="Shenzhen" label="深圳"/> 
  </tri-select-option-group>
  <tri-select-option-group label="其他城市">
    <tri-select-option value="Qingyuan" label="清远"/>
    <tri-select-option value="Hangzhou" label="杭州"/>
    <tri-select-option value="Suzhou" label="苏州"/>
    <tri-select-option value="LA" label="洛杉矶"/>
    <tri-select-option value="Canada" label="加拿大"/>
  </tri-select-option-group>
</tri-select>
```

## 可搜索的选择框

当选择框为单选时，可以通过传入`filterable`属性把它设置为可搜索的。这就意味着，选择框是可输入的，因此，你可以通过输入关键字快速查找选项，也可以通过退格快速撤销选中的选项。

<tri-select v-model="val5" filterable>
<tri-select-option-group label="国内一线城市">
<tri-select-option value="Beijing" label="北京"/>
<tri-select-option value="Shanghai" label="上海"/>
<tri-select-option value="Guangzhou" label="广州"/>
<tri-select-option value="Shenzhen" label="深圳"/> 
</tri-select-option-group>
<tri-select-option-group label="其他城市">
<tri-select-option value="Qingyuan" label="清远"/>
<tri-select-option value="Hangzhou" label="杭州"/>
<tri-select-option value="Suzhou" label="苏州"/>
<tri-select-option value="LA" label="洛杉矶"/>
<tri-select-option value="Canada" label="加拿大"/>
</tri-select-option-group>
</tri-select>

```vue
<tri-select v-model="val" filterable>
  <tri-select-option-group label="国内一线城市">
    <tri-select-option value="Beijing" label="北京"/>
    <tri-select-option value="Shanghai" label="上海"/>
    <tri-select-option value="Guangzhou" label="广州"/>
    <tri-select-option value="Shenzhen" label="深圳"/> 
  </tri-select-option-group>
  <tri-select-option-group label="其他城市">
    <tri-select-option value="Qingyuan" label="清远"/>
    <tri-select-option value="Hangzhou" label="杭州"/>
    <tri-select-option value="Suzhou" label="苏州"/>
    <tri-select-option value="LA" label="洛杉矶"/>
    <tri-select-option value="Canada" label="加拿大"/>
  </tri-select-option-group>
</tri-select>
```

## tri-select

### Props

<!-- @vuese:tri-select:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|name|表单的项 name（原生属性）|`String`|`false`|-|
|value|v-model 绑定值|`String` / `Array`|`false`|-|
|disabled|是否禁用|`Boolean`|`false`|false|
|multiple|是否多选|`Boolean`|`false`|false|
|placeholder|占位符|`String`|`false`|"请选择"|
|filterable|是否为可搜索选择框|`Boolean`|`false`|false|

<!-- @vuese:tri-select:props:end -->


### Events

<!-- @vuese:tri-select:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|focus|当 input 获取焦点时触发|event|
|blur|当 input 失去焦点时触发|event|
|input|-|-|
|change|选项改变时触发|当前选项的值|
|remove-tag|多选时标签移除的时候触发|移除的标签|

<!-- @vuese:tri-select:events:end -->


### Slots

<!-- @vuese:tri-select:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:tri-select:slots:end -->

## tri-select-option

### Props

<!-- @vuese:tri-select-option:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|value|选择项的值|`String`|`true`|-|
|label|选择项的标签|`String`|`false`|-|
|disabled|是否禁用|`Boolean`|`false`|false|

<!-- @vuese:tri-select-option:props:end -->


### Slots

<!-- @vuese:tri-select-option:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:tri-select-option:slots:end -->

## tri-select-option-group

### Props

<!-- @vuese:tri-select-option-group:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|label|标签|`String`|`false`|-|

<!-- @vuese:tri-select-option-group:props:end -->


### Slots

<!-- @vuese:tri-select-option-group:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|header|-|-|
|default|-|-|

<!-- @vuese:tri-select-option-group:slots:end -->