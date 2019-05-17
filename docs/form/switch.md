---
title: Switch 开关
---

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

# Switch 开关

## 基本使用

当用单个`Checkbox`的时候，开关的用途跟`Checkbox`差不多，因此用法也是一样通过`v-model`指令去使用。

<tri-switch v-model="isActive" />{{ isActive }}

```vue
<tri-switch v-model="isActive" />
```

## 开关/选择

`tri-switch`不仅仅是一个开关，还是一个两段选择器。例如，当你的一个选择表单中有两个选项，并且这两个选项逻辑上有关联，那么，`tri-switch`会是你更好的选择。

<tri-switch v-model="isActive" active-color="#13CE66" inactive-color="#6190E8" active-text="包年支付" inactive-text="包月支付"/>

```vue
<tri-switch v-model="isActive" active-color="#13CE66" inactive-color="#6190E8" active-text="包年支付" inactive-text="包月支付"/>
```

## 自定义色彩

你可能会发现，上面的色彩不一样了，因为你可以通过`active-color`以及`inactive-color`传入对应的颜色，它支持CSS中所有的颜色制式。

<tri-switch v-model="isActive" active-color="blue" inactive-color="yellow" active-text="包年支付" inactive-text="包月支付"/>
<tri-switch v-model="isActive" active-color="#FF4949" inactive-color="#FFC82C" active-text="包年支付" inactive-text="包月支付"/>

```vue
<tri-switch v-model="isActive" active-color="blue" inactive-color="yellow" active-text="包年支付" inactive-text="包月支付"/>

<tri-switch v-model="isActive" active-color="#FF4949" inactive-color="#FFC82C" active-text="包年支付" inactive-text="包月支付"/>
```

## 三种大小

`tri-switch`同样提供了三种大小。

<tri-switch v-model="isActive" size="small" active-text="small"/>
<tri-switch v-model="isActive" active-text="normal"/>
<tri-switch v-model="isActive" size="large" active-text="large"/>

```vue
<tri-switch v-model="isActive" size="small" active-text="small"/>
<tri-switch v-model="isActive" active-text="normal"/>
<tri-switch v-model="isActive" size="large" active-text="large"/>
```

## 禁用

通过传入`disabled`为真，达到禁用开关的状态。

<tri-switch v-model="isActive" disabled/>

```vue
<tri-switch v-model="isActive" disabled/>
```

## Props

<!-- @vuese:tri-switch:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|size|尺寸大小`'normal'` / `'small'` / `'large'`|`String`|`false`|"normal"|
|isActive|是否激活|`Boolean`|`false`|false|
|disabled|禁用|`Boolean`|`false`|false|
|activeText|激活时显式的文本|`String`|`false`|-|
|inactiveText|非激活时显示的文本|`String`|`false`|-|
|activeColor|激活时的颜色|`String`|`false`|"#6190E8"|
|inactiveColor|非激活时的颜色|`String`|`false`|"#BFBFBF"|

<!-- @vuese:tri-switch:props:end -->


## Events

<!-- @vuese:tri-switch:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|change|激活状态更改时触发|-|

<!-- @vuese:tri-switch:events:end -->