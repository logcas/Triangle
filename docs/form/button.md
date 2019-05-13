---
title: Button 按钮
---

<script>
export default {
  mounted() {
    import('@/common/js/iconfont.js').then(() => {})
  }
}
</script>

# Button 按钮

## 基本使用

TriangleUI目前提供了5种基本的按钮类型：`primary`、`warning`、`success`、`error`，还有就是默认样式，如果`type`属性为空，那么就使用默认类型。

<ClientOnly>
<tri-button>Default</tri-button>
<tri-button type="primary">Primary</tri-button>
<tri-button type="warning">Warning</tri-button>
<tri-button type="success">Success</tri-button>
<tri-button type="error">Error</tri-button>
</ClientOnly>

```vue
<tri-button>Default</tri-button>
<tri-button type="primary">Primary</tri-button>
<tri-button type="warning">Warning</tri-button>
<tri-button type="success">Success</tri-button>
<tri-button type="error">Error</tri-button>
```

## 附带图标

可以通过指定`iconName`属性为按钮添加一个图标

<ClientOnly>
<tri-button iconName="search">Default</tri-button>
<tri-button type="primary" iconName="search">Primary</tri-button>
<tri-button type="warning" iconName="search">Warning</tri-button>
<tri-button type="success" iconName="search">Success</tri-button>
<tri-button type="error" iconName="search">Error</tri-button>
</ClientOnly>

```vue
<tri-button iconName="search">Default</tri-button>
<tri-button type="primary" iconName="search">Primary</tri-button>
<tri-button type="warning" iconName="search">Warning</tri-button>
<tri-button type="success" iconName="search">Success</tri-button>
<tri-button type="error" iconName="search">Error</tri-button>
```

## 图标按钮

通过添加`iconButton`属性，可以把按钮变成一个圆形的图标按钮，此时，插槽的内容将会被忽略。

<ClientOnly>
<tri-button iconName="search" iconButton>Default</tri-button>
<tri-button type="primary" iconName="search" iconButton>Primary</tri-button>
<tri-button type="warning" iconName="search" iconButton>Warning</tri-button>
<tri-button type="success" iconName="search" iconButton>Success</tri-button>
<tri-button type="error" iconName="search" iconButton>Error</tri-button>
</ClientOnly>

```vue
<tri-button iconName="search" iconButton>Default</tri-button>
<tri-button type="primary" iconName="search" iconButton>Primary</tri-button>
<tri-button type="warning" iconName="search" iconButton>Warning</tri-button>
<tri-button type="success" iconName="search" iconButton>Success</tri-button>
<tri-button type="error" iconName="search" iconButton>Error</tri-button>
```

## 三种尺寸

目前有三种不同的尺寸：`normal`、`small`、`large`，默认是`normal`。

<ClientOnly>
<tri-button iconName="search" size="small">Small Default</tri-button>
<tri-button type="primary" iconName="search">Normal Primary</tri-button>
<tri-button type="error" iconName="search" size="large">Large Error</tri-button>
</ClientOnly>

```vue
<tri-button iconName="search" size="small">Small Default</tri-button>
<tri-button type="primary" iconName="search">Normal Primary</tri-button>
<tri-button type="error" iconName="search" size="large">Large Error</tri-button>
```

## Props

<!-- @vuese:tri-button:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|type|按钮类型|`''` / `'primary'` / `'warning'` / `'success'` / `'error'`|`false`|""|
|disabled|禁止点击|`Boolean`|`false`|false|
|size|按钮尺寸|`'normal'` / `'small'` / `'large'`|`false`|"normal"|
|iconButton|是否为圆形图标按钮（会忽略文本）|`Boolean`|`false`|false|
|iconName|图标名|`String`|`false`|""|

<!-- @vuese:tri-button:props:end -->


## Events

<!-- @vuese:tri-button:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|click|点击事件|-|

<!-- @vuese:tri-button:events:end -->


## Slots

<!-- @vuese:tri-button:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:tri-button:slots:end -->