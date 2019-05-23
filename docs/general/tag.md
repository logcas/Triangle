# Tag 标签

<script>
export default {
  methods: {
    onClose() {
      alert("你关闭了标签");
    }
  }
}
</script>

## 基本使用

通过设置`closable`可以使标签显示一个关闭按钮，使标签可以被关闭。当标签被关闭时，会触发`on-close`回调。

<tri-tag>标签一</tri-tag>
<ClientOnly>
<tri-tag style="margin-left: 4px;" closable @on-close="onClose">可关闭的标签一</tri-tag>
</ClientOnly>

```vue
<tri-tag>标签一</tri-tag>
<tri-tag closable @on-close="onClose">可关闭的标签一</tri-tag>
```

## 多种状态

标签内置了多种状态，你可以根据需求使用不同状态的标签，它们会呈现不同的颜色。

<tri-tag>标签一</tri-tag>
<tri-tag type="primary" style="margin-left: 4px;">标签二</tri-tag>
<tri-tag type="warning" style="margin-left: 4px;">标签三</tri-tag>
<tri-tag type="success" style="margin-left: 4px;">标签四</tri-tag>
<tri-tag type="error" style="margin-left: 4px;">标签五</tri-tag>

<tri-tag style="margin-left: 4px;" closable>标签一</tri-tag>
<tri-tag type="primary" style="margin-left: 4px;" closable>标签二</tri-tag>
<tri-tag type="warning" style="margin-left: 4px;" closable>标签三</tri-tag>
<tri-tag type="success" style="margin-left: 4px;" closable>标签四</tri-tag>
<tri-tag type="error" style="margin-left: 4px;" closable>标签五</tri-tag>

```vue
<tri-tag>标签一</tri-tag>
<tri-tag type="primary">标签二</tri-tag>
<tri-tag type="warning">标签三</tri-tag>
<tri-tag type="success">标签四</tri-tag>
<tri-tag type="error">标签五</tri-tag>
```

## 自定义任何颜色

除了内置的几种标签颜色，你还可以通过传入`background-color`以及`text-color`去自定义你想要的颜色。

<tri-tag background-color="blue" text-color="yellow">标签一</tri-tag>
<tri-tag background-color="#000" text-color="#fff" style="margin-left: 4px;">标签二</tri-tag>

```vue
<tri-tag background-color="blue" text-color="yellow">标签一</tri-tag>
<tri-tag background-color="#000" text-color="#fff">标签二</tri-tag>
```

## Props

<!-- @vuese:tri-tag:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|value|回调时用到的值|`String` / `Boolean`|`false`|-|
|type|标签类型|`String`|`false`|"default"|
|closable|是否可关闭（显式关闭按钮）|`Boolean`|`false`|false|
|backgroundColor|自定义背景色|`String`|`false`|-|
|textColor|自定义文本色|`String`|`false`|-|

<!-- @vuese:tri-tag:props:end -->


## Events

<!-- @vuese:tri-tag:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|on-close|标签关闭时触发的回调|-|

<!-- @vuese:tri-tag:events:end -->


## Slots

<!-- @vuese:tri-tag:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:tri-tag:slots:end -->