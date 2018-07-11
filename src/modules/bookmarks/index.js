import Vue from "vue";
import App from "./app";

import 'common/stylus/index.styl';

import router from "./router";
import installComponents from '../../base/index.js'

Vue.use(installComponents);
new Vue({
  el: '#app',
  render: (h) => {
    return h(App);
  },
  router
});
