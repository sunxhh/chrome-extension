let Vuex = require('vuex');
import Vue from 'vue';
import bookmark from './modules/bookmark.store';
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		bookmark
	}
})

module.exports = store;
