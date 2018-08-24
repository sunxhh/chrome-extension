import {
	toTop
} from '../../common/js/dom';
let originScrollDom = {};

const bindScroller = function (parent, children) {

}
const scrollCurrentType = function (data, el) {
	let scrollTop = el.scrollTop;
}

const dict = {
	scroll: function (el, data) {
		el.addEventListener('scroll', () => {
			originScrollDom = el;
		}, false);
	},

}


export default function (Vue) {
	Vue.directive('scroll', {
		// 当被绑定的元素插入到 DOM 中时……
		inserted: function (el, binding) {
			let type = binding.arg;
			dict[type] && dict[type](el, binding.value);
		}
	})
}
