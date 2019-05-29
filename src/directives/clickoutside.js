export default {
  bind(el, { value, expression }) {
    if(!el) return;
    el.$handler = function(event) {
      if(!el.contains(event.target) && expression) {
        value(event);
      }
    };
    document.addEventListener('click', el.$handler);
  },
  unbind(el) {
    document.removeEventListener('click', el.$handler);
  }
}