import Vue from 'vue';
import App from './app.vue';
import ElementUI from 'element-ui';

import 'common/stylus/index.styl';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router/index.js';
import installComponents from '../../base/index.js';
import installModuleComponents from './common/index.js';
import store from './store';

Vue.use(installComponents);
Vue.use(installModuleComponents);
Vue.use(ElementUI);

new Vue({
	el: '#app',
	// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
	store,
	render: (h) => {
		return h(App);
	},
	router
});
