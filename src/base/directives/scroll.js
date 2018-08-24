const dict = {
	scroll: function (el, data) {
		el.addEventListener('scroll', () => {

		}, false);
	},
	
}


export default function (Vue) {
	Vue.directive('drag', {
		// 当被绑定的元素插入到 DOM 中时……
		inserted: function (el, binding) {
			let type = binding.arg;
			dict[type] && dict[type](el, binding.value);
		}
	})
}
