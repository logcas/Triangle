<template>
  <div class="tri-time">
    <div class="pickers">
      <div class="active-box"></div>
      <tri-time-spinner :items="hours" v-model="h" :range="hourRange"/>
      <tri-time-spinner :items="minutes" v-model="m" :range="minuteRange"/>
      <tri-time-spinner :items="seconds" v-model="s"/>
    </div>
    <div style="padding: 5px;">
      <tri-button style="width: 100%" @click="onClear">取消选择</tri-button>
    </div>
  </div>
</template>

<script>
import TimeSpinner from './TimeSpinner';
import Button from '@/components/Button/Button.vue';
import Emitter from '@/mixins/Emitter';
import { parseTimeString } from '@/utils';

function getNumbers(start, end) {
  let res = [];
  for(let i = start; i < end; ++i) {
    let t = i < 10 ? '0' + i : `${i}`;
    res.push(t);
  }
  return res;
}

export default {
  name: 'tri-time',
  components: {
    [TimeSpinner.name]: TimeSpinner,
    [Button.name]: Button
  },
  mixins: [Emitter],
  props: {
    value: String,
    timeRange: Array,
    minTime: String
  },
  computed: {
    tRange() {
      return this.timeRange.map(([start, end]) => {
        return [parseTimeString(start), parseTimeString(end)];
      });
    },
    mTime() {
      return parseTimeString(this.minTime, 3);
    },
    hourRange() {
      let res = [];
      this.tRange.forEach(([start, end]) => {
        res.push([start[0], end[0]]);
      });
      return res;
    },
    minuteRange() {
      let res = [];
      let _h = Number(this.h);
      this.tRange.forEach(([start, end]) => {
        if(_h < start[0] || _h > end[0]) return;
        let _range = [0, 59];
        if(_h === start[0]) _range[0] = start[1];
        if(_h === end[0]) _range[1] = end[1];
        res.push(_range);
      });
      return res;
    }
  },
  watch: {
    h() {
      this.$emit('input', `${this.h}:${this.m}:${this.s}`);
    },
    m() {
      this.$emit('input', `${this.h}:${this.m}:${this.s}`);
    },
    s() {
      this.$emit('input', `${this.h}:${this.m}:${this.s}`);
    }
  },
  data() {
    return {
      hours: getNumbers(0, 24),
      minutes: getNumbers(0, 60),
      seconds: getNumbers(0, 60),
      h: '00',
      m: '00',
      s: '00',
    }
  },
  methods: {
    parseTime(time = '') {
      const [_h = '00', _m = '00', _s = '00'] = time.split(':');
      this.h = _h;
      this.m = _m;
      this.s = _s;
    },
    onClear() {
      this.broadcast('tri-time-spinner', 'clear');
      this.$emit('input', '');
    }
  },
  created() {
    this.parseTime(this.value);
  }
}
</script>

<style lang="scss" scoped>
@import './Time.scss';
</style>

