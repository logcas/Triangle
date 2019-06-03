# tri-time-picker

时间选择器

## Props

<!-- @vuese:tri-time-picker:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|type|选择器类型（固定时间，任意时间）|`'fixed'` / `'no-fixed'`|`false`|"fixed"|
|pickerOptions|选择器选项|`Object`|`false`|-|
|placeholder|占位符|`String`|`false`|-|
|disabled|是否禁用|`Boolean`|`false`|false|
|size|尺寸|`String`|`false`|"normal"|
|value|v-model 绑定值|`String`|`false`|-|

<!-- @vuese:tri-time-picker:props:end -->


## Events

<!-- @vuese:tri-time-picker:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|focus|获取焦点时触发|event|
|blur|失去焦点时触发|event|
|change|选择 改变时触发|新的时间|
|input|-|-|

<!-- @vuese:tri-time-picker:events:end -->


