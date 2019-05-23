function broadcast(component, eventName, ...params) {
  this.$children.forEach(child => {
    const name = child.$options.name;
    if(name === component) {
      child.$emit(eventName, ...params);
    } else {
      broadcast.apply(child, [component, eventName, ...params]);
    }
  });
}

export default {
  methods: {
    // 向子组件广播
    broadcast(component, eventName, ...params) {
      broadcast.apply(this, [component, eventName, ...params]);
    },
    // 向父组件派发事件
    dispatch(component, eventName, ...params) {
      let parent = this.$parent;
      while(parent && parent.$options.name !== component) {
        parent = parent.$parent;
      }
      if(parent) {
        parent.$emit(eventName, ...params);
      }
    }
  },
}