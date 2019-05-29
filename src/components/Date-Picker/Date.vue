<template>
  <div class="tri-date">
    <!-- 日期选择 -->
    <div v-show="showedSelector === 'date'">
      <div class="tri-date-header">
        <tri-icon icon-name="left" style="left: 5px;" @click.native="getLastMonth()"/>
        <tri-icon icon-name="right" style="right: 5px;" @click.native="getNextMonth()"/>
        <div class="header-date" @click="setTap('year')">{{ currentYear }}年</div>
        <div class="header-date month" @click="setTap('month')">{{ currentMonth + 1 }}月</div>
      </div>
      <table class="tri-date-table">
        <tr class="tri-date-week">
          <th v-for="w in week" :key="w">{{ w }}</th>
        </tr>
        <tr v-for="(ds, idx) in calendar" class="tri-date-row">
          <td
            v-for="d in ds"
            class="tri-date-item"
            :class="{
          selectable: currentMonth == d.month && currentYear == d.year,
          selected: isSelected(d.year, d.month, d.day),
          'start-date': isStartDate(d.year, d.month, d.day),
          'end-date': isEndDate(d.year, d.month, d.day)
        }"
            @click="onSelect(d.year, d.month, d.day)"
          >
            <span>{{ d.day }}</span>
          </td>
        </tr>
      </table>
      <div style="margin: 5px;">
        <tri-button style="width: 100%;" @click="clearSelection">取消选择</tri-button>
      </div>
    </div>
    <!-- 月份选择 -->
    <div v-show="showedSelector === 'month'">
      <div class="tri-date-header">
        <tri-icon icon-name="left" style="left: 5px;" @click.native="getLastYears()"/>
        <tri-icon icon-name="right" style="right: 5px;" @click.native="getNextYears()"/>
        <div class="header-date" @click="setTap('year')">{{ currentYear }}年</div>
      </div>
      <table>
        <tr v-for="ms in month">
          <td
            v-for="m in ms"
            :key="m.month"
            class="month-item"
            :class="{
            current: m.index === currentMonth
          }"
            @click="setMonth(m.index)"
          >
            <span>{{ m.month }}</span>
          </td>
        </tr>
      </table>
    </div>
    <!-- 年份选择 -->
    <div v-show="showedSelector === 'year'">
      <div class="tri-date-header">
        <tri-icon icon-name="left" style="left: 5px;" @click.native="setYearStart('minus', 10)"/>
        <tri-icon icon-name="right" style="right: 5px;" @click.native="setYearStart('add', 10)"/>
        <div class="header-date">{{ yearStart }}年 - {{ yearStart + 9 }} 年</div>
      </div>
      <table>
        <tr v-for="decade in year">
          <td
            v-for="y in decade"
            :key="y"
            class="month-item"
            :class="{
            current: y === currentYear
          }"
            @click="setYear(y)"
          >
            <span>{{ y }}</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";
import Button from "@/components/Button/Button.vue";
const week = ["一", "二", "三", "四", "五", "六", "日"];
const datePickerType = ["date", "daterange", "datemulti", "month", "year"];
const months = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月"
];

export default {
  name: "tri-date",
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
  },
  props: {
    value: [String, Date, Array],
    type: {
      type: String,
      default: "date",
      validator(val) {
        return datePickerType.includes(val);
      }
    }
  },
  watch: {
    currentYear(val) {
      this.yearStart = parseInt(val / 10) * 10;
    }
  },
  computed: {
    showedSelector() {
      switch(this.type) {
        case 'date':
        case 'daterange':
        case 'datemulti':
          return this.currentTap;
        case 'year':
          return 'year';
        case 'month':
          if(this.currentTap === 'year') return 'year';
          return 'month';
      }
    },
    year() {
      let max = this.yearStart + 9;
      let t = 0;
      let arr = [];
      let year = [];
      for(let i = this.yearStart;i <= max; ++i) {
        t++;
        arr.push(i);
        if(t % 4 === 0) {
          year.push([...arr]);
          t = 0;
          arr.length = 0;
        }
      }
      if(arr.length !== 0) year.push([...arr]);
      return year;
    },
    month() {
      let t = 0;
      let arr = [];
      let _month = [];
      for (let i = 0; i < months.length; ++i) {
        arr.push({ month: months[i], index: i });
        ++t;
        if (t % 4 === 0) {
          t = 0;
          _month.push([...arr]);
          arr = [];
        }
      }
      return _month;
    }
  },
  data() {
    return {
      week,

      // tap
      currentTap: "date", // values: ['date', 'month', 'year']

      // single select
      selectedYear: null,
      selectedMonth: null,
      selectedDay: null,

      // multi
      selectedDates: null,

      // range
      startDate: null,
      endDate: null,

      // calendar control
      currentYear: 2019,
      currentMonth: 5,
      currentDay: 28,
      calendar: null,
      yearStart: 2010,
    };
  },
  methods: {
    setYearStart(op, ys) {
      switch(op) {
        case 'add': this.yearStart += ys;break;
        case 'minus': this.yearStart -= ys;break;
      }
    },
    setYear(y) {
      this.currentYear = y;
      if (this.type === 'year') {
        this.$emit('input', `${y}`);
        return;
      }
      if (this.type === 'month') {
        this.setTap("month");
        return;
      }
      this.getCalendar();
      this.setTap("date");
    },
    setMonth(m) {
      this.currentMonth = m;
      if (this.type === "month") {
        this.$emit('input', `${this.currentYear}-${this.currentMonth + 1}`);
        return;
      }
      this.getCalendar();
      this.setTap("date");
    },
    setTap(tap) {
      this.currentTap = tap;
    },
    clearSelection() {
      this.selectedYear = null;
      this.selectedMonth = null;
      this.selectedDay = null;
      this.selectedDates = null;
      this.startDate = null;
      this.endDate = null;
      this.$emit("clear");
    },
    isStartDate(year, month, day) {
      if (this.type !== "daterange") return;
      let d = new Date(year, month, day);
      if (this.startDate) return this.startDate.getTime() === d.getTime();
      return false;
    },
    isEndDate(year, month, day) {
      if (this.type !== "daterange") return;
      let d = new Date(year, month, day);
      if (this.endDate) return this.endDate.getTime() === d.getTime();
      return false;
    },
    isSelected(year, month, day) {
      let d = new Date(year, month, day);
      switch (this.type) {
        case "daterange":
          if (this.startDate && !this.endDate) {
            return this.startDate.getTime() === d.getTime();
          } else if (!this.startDate && this.endDate) {
            return this.endDate.getTime() === d.getTime();
          } else if (this.startDate && this.endDate) {
            return (
              d.getTime() >= this.startDate.getTime() &&
              d.getTime() <= this.endDate.getTime()
            );
          } else return false;
        case "datemulti":
          return (
            this.selectedDates &&
            this.selectedDates.some(date => date.getTime() === d.getTime())
          );
        case "date":
          return (
            year === this.selectedYear &&
            month === this.selectedMonth &&
            day === this.selectedDay
          );
        case "year":
          return year === this.selectedYear;
        case "month":
          return month === this.selectedMonth;
        default:
          return false;
      }
    },
    onSelect(year, month, day) {
      if (year !== this.currentYear || month !== this.currentMonth) return;
      this.selectedYear = year;
      this.selectedMonth = month;
      this.selectedDay = day;
      let d = new Date(year, month, day);
      switch (this.type) {
        case "datemulti":
          this.selectedDates || (this.selectedDates = []);
          // 先寻找是否已经存在
          let idx = -1;
          for (let i = 0; i < this.selectedDates.length; ++i) {
            if (this.selectedDates[i].getTime() === d.getTime()) {
              idx = i;
              break;
            }
          }
          // 不存在，则加入
          if (idx === -1) {
            this.selectedDates.push(d);
          } else {
            // 否则删除
            this.selectedDates.splice(idx, 1);
          }
          this.$emit("input", this.selectedDates);
          break;
        case "daterange":
          if (!this.startDate && !this.endDate) {
            this.startDate = this.endDate = d;
          } else if (this.startDate.getTime() < d.getTime()) {
            this.endDate = d;
          } else this.startDate = d;
          this.$emit("input", [this.startDate, this.endDate]);
          break;
        case "date":
          this.$emit("input", d);
          break;
        case "year":
          this.$emit("input", this.selectedYear);
          break;
        case "month":
          this.$emit("input", this.selectedMonth);
          break;
      }
    },
    getLastMonth() {
      let lastMonth = this.currentMonth - 1;
      if (lastMonth < 0) {
        lastMonth = 11;
        this.currentYear -= 1;
      }
      this.currentMonth = lastMonth;
      this.getCalendar();
    },
    getNextMonth() {
      let nextMonth = this.currentMonth + 1;
      if (nextMonth > 11) {
        nextMonth = 0;
        this.currentYear += 1;
      }
      this.currentMonth = nextMonth;
      this.getCalendar();
    },
    getLastYears(t) {
      this.currentYear -= t || 1;
    },
    getNextYears(t) {
      this.currentYear += t || 1;
    },
    getCalendar() {
      let newCalendar = [];
      // 先获取上个月最后一天是星期几
      let lastDayOfLastMonth = new Date(
        this.currentYear,
        this.currentMonth,
        0
      ).getDay();
      let lastMonth = this.currentMonth - 1;
      let yearOfLastMonth = this.currentYear;
      if (lastMonth < 0) {
        lastMonth = 11;
        yearOfLastMonth -= 1;
      }
      let lastDateOfLastMonth = new Date(
        this.currentYear,
        this.currentMonth,
        0
      ).getDate();
      // 把上个月剩下的几天放入第一个数组
      if (lastDayOfLastMonth < 7) {
        let days = [];
        let t = lastDateOfLastMonth;
        for (let i = 0; i < lastDayOfLastMonth; ++i) {
          days.unshift({
            year: yearOfLastMonth,
            month: lastMonth,
            day: t--
          });
        }
        newCalendar.push([...days]);
      }
      // 处理第一个数组剩下的几天
      newCalendar[0] || (newCalendar[0] = []);
      let lastDateOfCurrentMonth = new Date(
        this.currentYear,
        this.currentMonth + 1,
        0
      ).getDate();
      let t = 1;
      for (let i = newCalendar[0].length; i < 7; ++i) {
        newCalendar[0][i] = {
          year: this.currentYear,
          month: this.currentMonth,
          day: t++
        };
      }
      // 把当前月剩下的放入其余数组
      let tmp = [];
      for (; t <= lastDateOfCurrentMonth; ++t) {
        tmp.push({
          year: this.currentYear,
          month: this.currentMonth,
          day: t
        });
        if (tmp.length === 7) {
          newCalendar.push([...tmp]);
          tmp.length = 0;
        }
      }
      // 处理剩下的下个月的前几天
      t = 1;
      let nextMonth = this.currentMonth + 1;
      let nextYear = this.currentYear;
      if (nextMonth > 11) {
        nextMonth = 0;
        nextYear += 1;
      }
      for (let i = tmp.length; tmp.length < 7; ++i) {
        tmp.push({
          year: nextYear,
          month: nextMonth,
          day: t++
        });
      }
      newCalendar.push(tmp);
      this.calendar = newCalendar;
    },
    getCurrent(val) {
      let d = new Date();
      if (val) d = new Date(val);
      this.currentYear = d.getFullYear();
      this.currentMonth = d.getMonth();
      this.currentDay = d.getDate();
      this.getCalendar();
    },
  },
  mounted() {
    this.getCurrent(this.value);
  }
};
</script>

<style lang="scss" scoped>
@import "./Date.scss";
</style>

