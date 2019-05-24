# tri-rate

评分

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


