/**
 * 路由切换
 */
import store from '@/store';

export default {
  install(Vue) {
    Vue.prototype.$goto = function(route, keepCache = true) {
      if (typeof route === 'number') return this.$router.go(route);

      if (keepCache) return this.$router.push(route);

      const view = this.$router.resolve(route).route;
      store.dispatch('tagsView/delCachedView', view).then(() => {
        this.$nextTick(() => {
          this.$router.push(route);
        });
      });
    };
  },
};
