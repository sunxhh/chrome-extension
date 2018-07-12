import Vue from "vue";
import App from "./app.vue";

import 'common/stylus/index.styl';

import router from "./router/index.js";
import installComponents from '../../base/index.js'

Vue.use(installComponents);
new Vue({
  el: '#app',
  render: (h) => {
    return h(App);
  },
  router
});
