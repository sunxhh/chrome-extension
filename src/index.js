import Vue from "vue";
import App from "./app";

import 'src/common/stylus/index.styl';

import router from "./router";

new Vue({
  el: '#app',
  render: (h) => {
    return h(App);
  },
  router
});