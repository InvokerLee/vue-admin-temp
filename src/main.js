import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/styles/index.scss'; // global css

import App from './App';
import store from './store';
import router from './router';
import './router/guards';

import components from '@/components/global';
import autoHeight from '@/utils/directive/autoHeight';
import authorized from '@/utils/plugins/authorized';
import goto from '@/utils/plugins/goto';
import dialog from '@/utils/plugins/dialog';

Vue.use(ElementUI, { size: 'mini' });
Vue.use(authorized);
Vue.use(goto);
Vue.use(dialog);

Vue.directive('auto-height', autoHeight);

// 注册components文件夹下index.js定义的公共组件
Object.keys(components).forEach(e => {
  Vue.component(e, components[e]);
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
