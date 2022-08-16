import Vue from 'vue';
import { Dialog } from 'element-ui';

let instance;

const Modal = function({ props, component, componentProps, on }) {
  if (Vue.prototype.$isServer) return;
  const dom = document.createElement('div');
  document.body.appendChild(dom);
  instance = new Vue({
    el: dom,
    components: {
      Dialog,
      Comp: component,
    },
    data() {
      return {
        visible: true,
      };
    },
    beforeDestroy() {
      this.$el.parentNode.removeChild(this.$el);
    },
    methods: {
      close() {
        this.visible = false;
        this.$destroy();
      },
    },
    render(createElement) {
      const comp = this.visible ? () => createElement('Comp', {
        props: {
          ...componentProps,
        },
        on: {
          close: (e) => this.close(e),
          ...on,
        },
      }) : null;
      return createElement(
        'Dialog', {
          props: {
            visible: this.visible,
            top: '5vh',
            ...props,
          },
          on: {
            close: (e) => this.close(e),
          },
          scopedSlots: {
            default: comp,
          },
        });
    },
  });
  return instance;
};

export default {
  install(Vue) {
    Vue.prototype.$dialog = Modal;
  },
};
