# Rate 评分

<script>
export default {
  data() {
    return {
      val1: 0
    }
  }
}
</script>

## 基本使用

评分组件可以通过`v-model`指令便捷使用，必须注意的是，通过`v-model`指令传入的必须是一个`Number`类型的变量。

<tri-rate v-model="val1"/>

```vue
<tri-rate v-model="val"/>
```

## 自定义显示文本

通过插槽可以设置自定义的显示文本。

<tri-rate v-model="val1">{{ val1 }} 星</tri-rate>

```vue
<tri-rate v-model="val">
  {{ val }} 星
</tri-rate>
```

## 自定义图标

通过指定`icon-name`属性可以把图标设置为你喜欢的。

<tri-rate v-model="val1" icon-name="brightness"/>

```vue
<tri-rate v-model="val" icon-name="brightness"/>
```

## 自定义颜色

`activeColor`以及`inactiveColor`分别指代了激活颜色和非激活颜色，你可以设置它们。

<tri-rate v-model="val1" activeColor="blue" inactiveColor="black"/>
<br>
<tri-rate v-model="val1" activeColor="red" inactiveColor="yellow"/>

```vue
<tri-rate v-model="val" activeColor="blue" inactiveColor="black"/>

<tri-rate v-model="val" activeColor="red" inactiveColor="yellow"/>
```

## 自定义大小

`tri-rate`组件中的图标来自于`tri-icon`，而`tri-icon`由基于SVG构建。那么，你可以通过CSS中`font-size`属性设置图标的大小。在这里，我们暴露了`size`属性，你可以传入你希望的`font-size`大小，以调整组件图标的大小。

默认为`20px`。

<tri-rate v-model="val1" size="30"/>
<br>
<tri-rate v-model="val1" size="40"/>
<br>
<tri-rate v-model="val1" size="50"/>

```vue
<tri-rate v-model="val" size="30"/>
<tri-rate v-model="val" size="40"/>
<tri-rate v-model="val" size="50"/>
```

## 禁用

传入`disabled`属性以禁用组件。

<tri-rate v-model="val1" disabled/>

```vue
<tri-rate v-model="val" disabled/>
```

## Props

<!-- @vuese:tri-rate:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|activeColor|激活时颜色|`String`|`false`|'#ffc82c'|
|inactiveColor|失活时颜色|`String`|`false`|'#BFBFBF'|
|value|值， 与v-model相关|`Number`|`false`|0|
|count|评分图标的个数，默认为5|`Number`|`false`|5|
|iconName|图标名|`String`|`false`|'favfill'|
|size|图标大小，单位为px|`Number` / `String`|`false`|20|
|disabled|是否禁用|`Boolean`|`false`|false|

<!-- @vuese:tri-rate:props:end -->


## Events

<!-- @vuese:tri-rate:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|input|-|-|
|on-hover-change|hover 时改变评分触发|参数为 hover 时的评分|
|on-change|点击改变评分时触发|参数为新的评分|

<!-- @vuese:tri-rate:events:end -->


## Slots

<!-- @vuese:tri-rate:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:tri-rate:slots:end -->