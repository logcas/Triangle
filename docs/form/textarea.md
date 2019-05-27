# Textarea 文本域

<script>
export default {
  data() {
    return {
      val: 'Hello, Triangle',
      val2: ''
    }
  }
}
</script>

## 基本使用

基本的文本域默认宽度为`100%`

<ClientOnly>
<tri-textarea v-model="val"></tri-textarea>
</ClientOnly>

```vue
<tri-textarea v-model="val"></tri-textarea>
```

## 自适应高度

通过传入`autoresize`为真使文本域可以根据文本自适应调整高度，与此同时，你可以设置`min-row`和`max-row`去限制自适应高度的最小行数和最大行数。当设置为`autoresize`时，`rows`属性将会失效。

<ClientOnly>
<tri-textarea v-model="val" autoresize :min-row="4" :max-row="10"></tri-textarea>
</ClientOnly>

```vue
<tri-textarea v-model="val" autoresize :min-row="4" :max-row="10"></tri-textarea>
```

## 指定行数

通过传入原生属性`rows`去控制文本域的行数。

<ClientOnly>
<tri-textarea v-model="val" :rows="10"></tri-textarea>
</ClientOnly>

```vue
<tri-textarea v-model="val" :rows="10"></tri-textarea>
```

## 控制缩放大小

原生的文本域中，你可以拖动右下角以调整大小。在`tri-textarea`中，缩放的默认方向是垂直方向，但你可以根据需求设置成`none`、`horizontal`、`both`，分别表示`不能缩放`、`水平缩放`、`水平和垂直同时可以缩放`。

<ClientOnly>
<tri-textarea v-model="val2" resize="horizontal" placeholder="只能水平缩放"></tri-textarea>
<tri-textarea v-model="val2" resize="none" placeholder="不能拖动"></tri-textarea>
<tri-textarea v-model="val2" resize="both" placeholder="水平和垂直都能缩放"></tri-textarea>
</ClientOnly>

```vue
<tri-textarea v-model="val2" resize="horizontal" placeholder="只能水平缩放"></tri-textarea>
<tri-textarea v-model="val2" resize="none" placeholder="不能拖动"></tri-textarea>
<tri-textarea v-model="val2" resize="both" placeholder="水平和垂直都能缩放"></tri-textarea>
```

## 禁用

<ClientOnly>
<tri-textarea v-model="val" disabled></tri-textarea>
</ClientOnly>

```vue
<tri-textarea v-model="val" disabled></tri-textarea>
```

## Props

<!-- @vuese:tri-textarea:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|name|原生属性|`String`|`false`|-|
|value|v-model 绑定值|`String`|`false`|-|
|placeholder|原生属性|`String`|`false`|-|
|readonly|原生属性|`Boolean`|`false`|false|
|disabled|禁用|`Boolean`|`false`|false|
|autofocus|自动获取焦点（原生属性）|`Boolean`|`false`|false|
|resize|可变大小|`'none'` / `vertical` / `horizontal` / `both`|`false`|'vertical'|
|minRow|最小行数（ autoresize时生效）|`Number`|`false`|1|
|maxRow|最大行数（ autoresize时生效）|`Number`|`false`|-|
|autoresize|自适应高度|`Boolean`|`false`|false|
|rows|原生属性|`Number`|`false`|2|

<!-- @vuese:tri-textarea:props:end -->


## Events

<!-- @vuese:tri-textarea:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|input|-|-|

<!-- @vuese:tri-textarea:events:end -->