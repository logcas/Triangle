---
title: Checkbox 多选框
---

<script>
export default {
  data() {
    return {
      isChecked: false,
      value: ['广州', '上海']
    }
  },
}
</script>

# Checkbox 多选框

## 基本使用

可以通过传入`v-model`使用单个多选框，传入的属性类型为`Boolean`。

<tri-checkbox v-model="isChecked">{{ isChecked }}</tri-checkbox>

```vue
<tri-checkbox v-model="isChecked">{{ isChecked }}</tri-checkbox>
```

## 禁用

通过传入`disabled`属性，可以决定是否禁用这个选项。

<tri-checkbox v-model="isChecked" disabled>禁用的</tri-checkbox>

```vue
<tri-checkbox v-model="isChecked" disabled>禁用的</tri-checkbox>
```

## 与 `Checkbox-Group` 一起使用

更多时候，我们可能都会与`Checkbox-Group`一起使用。使用`<tri-checkbox-group>`标签包裹一系列`<tri-checkbox>`，然后通过`v-model`指定`value`数组，可以很方便地选择对应的选项。

<tri-checkbox-group v-model="value">
  <tri-checkbox value="北京">北京</tri-checkbox>
  <tri-checkbox value="广州">广州</tri-checkbox>
  <tri-checkbox value="深圳">深圳</tri-checkbox>
  <tri-checkbox value="上海">上海</tri-checkbox>
</tri-checkbox-group>
<p>{{ value }}</p>

```vue
<tri-checkbox-group v-model="value">
  <tri-checkbox value="北京">北京</tri-checkbox>
  <tri-checkbox value="广州">广州</tri-checkbox>
  <tri-checkbox value="深圳">深圳</tri-checkbox>
  <tri-checkbox value="上海">上海</tri-checkbox>
</tri-checkbox-group>
```

## Props

### Checkbox
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|name|name(原生属性)|`String`|`false`|-|
|checked|是否选择（原生属性）|`Boolean`|`false`|-|
|value|值|`String`|`false`|-|
|label|标签|`String`|`false`|''|
|disabled|是否禁用|`Boolean`|`false`|false|

### Checkbox-Group
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|value|选择器的值|`Array`|`false`||
|name|name 表单用|`String`|`false`|-|


## Events

### Checkbox
|Event Name|Description|Parameters|
|---|---|---|
|change|-|-|

### Checkbox-Group
|Event Name|Description|Parameters|
|---|---|---|
|change|当选择发生变化时，会触发|返回新的值数组，newValue|

## Slots

### Checkbox
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

### Checkbox-Group
|Name|Description|Default Slot Content|
|---|---|---|
|default|默认插槽，可放入`<tri-checkbox>`作为子元素|-|