# tri-select

选择框

## Props

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


## Events

<!-- @vuese:tri-select:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|focus|当 input 获取焦点时触发|event|
|blur|当 input 失去焦点时触发|event|
|input|-|-|
|change|选项改变时触发|当前选项的值|
|remove-tag|多选时标签移除的时候触发|移除的标签|

<!-- @vuese:tri-select:events:end -->


## Slots

<!-- @vuese:tri-select:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:tri-select:slots:end -->


## MixIns

<!-- @vuese:tri-select:mixIns:start -->
|MixIn|
|---|
|Emitter|

<!-- @vuese:tri-select:mixIns:end -->


