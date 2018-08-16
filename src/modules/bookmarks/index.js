import Vue from 'vue';
import App from './app.vue';
import ElementUI from 'element-ui';

import 'common/stylus/index.styl';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router/index.js';
import installComponents from '../../base/index.js'

Vue.use(installComponents);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: (h) => {
    return h(App);
  },
  router
});

