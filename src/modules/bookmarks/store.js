let Vuex = require('vuex');
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0,
		todos: [1, 2, 3]
	},
	getters: {
		doneTodos: state => {
			return state.todos.map(todo => ++todo)
		}
	},
	mutations: {
		increment(state) {
			state.count++
		}
	},
	actions: {
		add(context) {
			context.commit('increment')
		}
	}
})

module.exports = store;
