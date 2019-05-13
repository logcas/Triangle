# Icon 图标

TriangleUI封装了来自阿里巴巴iconfont图表库中的一部分图标，可以通过`<tri-icon></tri-icon>`标签便捷使用。

## 基本使用

传入`icon-name`去指定你需要的图标。

<ClientOnly>
<tri-icon icon-name="search" style="font-size: 30px;"></tri-icon>
<tri-icon icon-name="cloud" style="font-size: 30px;"></tri-icon>
<tri-icon icon-name="like" style="font-size: 30px;"></tri-icon>
</ClientOnly>

```vue
<tri-icon icon-name="search"></tri-icon>
<tri-icon icon-name="cloud"></tri-icon>
<tri-icon icon-name="like"></tri-icon>
```

## 自定义大小

我们没有固定任何大小的值，因为它是通过`font-size`控制的。

<ClientOnly>
<tri-icon icon-name="search" style="font-size: 20px;"></tri-icon>
<tri-icon icon-name="cloud" style="font-size: 30px;"></tri-icon>
<tri-icon icon-name="like" style="font-size: 40px;"></tri-icon>
</ClientOnly>

```vue
<tri-icon icon-name="search" style="font-size: 20px;"></tri-icon>
<tri-icon icon-name="cloud" style="font-size: 30px;"></tri-icon>
<tri-icon icon-name="like" style="font-size: 40px;"></tri-icon>
```

## 自定义颜色

因为它本质是SVG矢量图形，因此你也可以通过`color`指定任何颜色。

<ClientOnly>
<tri-icon icon-name="search" style="font-size: 30px;color: red;"></tri-icon>
<tri-icon icon-name="cloud" style="font-size: 30px;color: blue;"></tri-icon>
<tri-icon icon-name="like" style="font-size: 30px;color: purple;"></tri-icon>
</ClientOnly>

```vue
<tri-icon icon-name="search" style="font-size: 30px;color: red;"></tri-icon>
<tri-icon icon-name="cloud" style="font-size: 30px;color: blue;"></tri-icon>
<tri-icon icon-name="like" style="font-size: 30px;color: purple;"></tri-icon>
```

## 图标列表

<ClientOnly>
<icon-displayer v-for="icon in list" :key="icon" :icon-name="icon"/>
</ClientOnly>

<script>
export default {
  data() {
    return {
      list: [
        'download', 'downloadfill',
        'cloud', 'cloudfill', 'check', 'scan', 'search', 'date',
        'zoomcard', 'jinbi', 'qr2', 'close', 'closefill',
        'backtop', 'filter', 'plane', 'planefill',
        'select2', 'select2fill', 'ascend', 'computer',
        'rmb', 'jifenbao', 'falling', 'defaultsort',
        'more', 'pic', 'attachment', 'close', 'closefill',
        'mobile', 'lock', 'like', 'likefill',
        'fanlifill', 'social', 'socialfill', 'user', 'crown',
        'comments', 'level', 'write', 'fav', 'favfill',
        'diamond', 'delete', 'rotating', 'adjust', 'brightness',
        'light', 'dark', 'flash', 'flashauto', 'flashoff',
        'wow', 'sharpen', 'tag', 'refresh', 'lbs',
        'left', 'right', 'down', 'top', 'back', 'select',
        'clock', 'camera', 'camerafill', 'link', 'clothing',
        'temperature', 'crop', 'vignetting', 'gird', 'smile', 'sad',
        'lbsfill', 'switch', 'selectfill', 'kuaisufan', 'jisufan'
      ]
    }
  },
  mounted() {
    import('@/common/js/iconfont.js').then(() => {})
  }
}
</script>

## Props

<!-- @vuese:tri-icon:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|iconName|图标名|`String`|`true`|-|

<!-- @vuese:tri-icon:props:end -->


