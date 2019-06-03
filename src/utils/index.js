// noop function, dothing
function noop () {}

// 破产版防抖
export const debounce = (fn = noop, wait = 0, immediate = false) => {
  let timer = null;
  let first = true;
  return function(...args) {
    if(first && immediate) {
      fn.apply(this, args);
      first = false;
    }
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  }
}

// 时间串解析
export const parseTimeString = (timeStr, n = 2) => {
  let t;
  try {
    t = timeStr.split(':');
    for(let i = 0;i < n; ++i) {
      t[i] = t[i] ? isNaN(Number(t[i])) ? 0 : Number(t[i]) : 0;
    }
  } catch(e) {
    t = [0, 0, 0];
  }
  return t;
}