import store from '@/store';

const AUTH_KEY = 'route';
const AUTH_NAME = 'name';

export default {
  install(Vue) {
    Vue.prototype.$isAuth = function(value) {
      const permissions = store.getters && store.getters.menuList.map(v => v[AUTH_KEY]);

      if (typeof value === 'string' || typeof value === 'number') {
        return permissions.includes(value);
      }

      if (Array.isArray(value)) {
        return value.every(v => permissions.includes(v));
      }

      return false;
    };

    Vue.prototype.$getAuthName = function(value) {
      const permissions = store.getters && store.getters.menuList;

      if (typeof value === 'string' || typeof value === 'number') {
        const item = permissions.find(v => v[AUTH_KEY] === value);
        return item && item[AUTH_NAME];
      }

      return '';
    };
  },
};
