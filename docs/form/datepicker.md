# DatePicker 日期选择器

<script>
export default {
  data() {
    return {
      date1: '',
      daterange: [],
      datemulti: [],
      month: '',
      year: '',
    }
  }
}
</script>

## 基本使用

由于很难去解析用户的各种输入，因此，即使日期选择器是通过`v-model`指令来使用，这里并也没有**双向绑定**。用户改变值的唯一方法，是通过日期选择器选择一个日期。因此，手动输入是无效的，日期选择器也不会根据手动输入的值去动态调整。

当你选择一个日期后，`v-model`会返回一个`Date`类型实例。

<tri-date-picker v-model="date1" placeholder="选择一个日期"/>

选择的日期：{{date1}}

```vue
<tri-date-picker v-model="date1"/>
```

## 选择日期范围

有时候可能需要选择一个时间的区别，这时候，通过传入`type="daterange"`可以使日期选择器变成“时间区间”的日期选择器。

这时，`v-model`返回一个数组，里面有两个属性，前者为开始时间，后者为结束时间，两者都是`Date`实例。

<tri-date-picker v-model="daterange" type="daterange" placeholder="选择一个日期范围"/>

选择的区间：{{daterange}}

```vue
<tri-date-picker v-model="daterange" type="daterange"/>
```

## 选择多个日期

如果对于同时选择多个日期，并且日期不连续，那么可以传入`type="datemulti"`时它支持日期多选。

这时，`v-model`返回一个数组，里面有已选择的日期，都是`Date`实例。

<tri-date-picker v-model="datemulti" type="datemulti" placeholder="选择多个日期"/>

选择的所有时间：{{datemulti}}

```vue
<tri-date-picker v-model="daterange" type="daterange"/>
```

## 选择月份和年份

如果只需要月份或者年份，可以通过传入`type="month"`或`type="year"`。

这时，`v-model`返回的就不是`Date`实例了，而是一个字符串。

<tri-date-picker v-model="month" type="month" placeholder="选择月份"/>

选择的月份：{{month}}

<tri-date-picker v-model="year" type="year" placeholder="选择年份"/>

选择的年份：{{year}}

```vue
<tri-date-picker v-model="month" type="month"/>
<tri-date-picker v-model="year" type="year"/>
```

## Props

<!-- @vuese:tri-date-picker:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|type|选择的类型|`'date'` / `'daterange'` / `'datemulti'` / `'year'` / `'month'`|`false`|'date'|
|placeholder|占位符|`String`|`false`|-|

<!-- @vuese:tri-date-picker:props:end -->


## Events

<!-- @vuese:tri-date-picker:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|input|当日期选择更改时触发|Date/Date[]/String|

<!-- @vuese:tri-date-picker:events:end -->
