# TimePicker 时间选择器

<script>
export default {
  data() {
    return {
      time1: '',
      time2: '',
    }
  }
}
</script>

## 固定的时间区间

比如，你需要用户选择`10:30:00`到`15:30:00`时间段之间的时间，并且每30分钟为一个选项：

<tri-time-picker v-model="time1" placeholder="选择一个时间" type="fixed" :picker-options="{start: '10:30', end: '15:30', step: '00:30'}"/>

当前选择的时间：{{ time1 }}

```vue
<tri-time-picker v-model="time1"
                 placeholder="选择一个时间"
                 type="fixed"
                 :picker-options="{
                   start: '10:30',
                   end: '15:30',
                   step: '00:30'
                   }"
/>
```

## 任意时间区间

比如，你想要在`10:30:00 - 12:30:00` 以及 `14:00:00 - 18:30:00`区间中，允许用户任意选择一个时间，那么你可以指定`type="no-fixed"`，然后传入响应`pickerOptions`。

<tri-time-picker v-model="time2" placeholder="选择一个时间" type="no-fixed" :picker-options="{ timeRange:[['10:30:00', '12:30:00'], ['14:00:00', '18:30:00']] }"/>

当前选择的时间：{{ time2 }}

```vue
<tri-time-picker v-model="time2"
                 placeholder="选择一个时间"
                 type="no-fixed"
                 :picker-options="{
                   timeRange:[
                    ['10:30:00', '12:30:00'],
                    ['14:00:00', '18:30:00']
                   ] }"
                />
```


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
