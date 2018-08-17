import components from './components/index';
import directives from './directives/index'

export default {
	install: function (Vue) {
		components(Vue);
		directives(Vue);
	}
}
