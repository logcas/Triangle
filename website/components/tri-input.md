# tri-input

输入框

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


