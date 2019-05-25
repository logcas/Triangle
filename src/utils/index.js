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