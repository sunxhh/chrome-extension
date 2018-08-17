// 注册一个全局自定义指令 `v-focus`
// 一个指令定义对象可以提供如下几个钩子函数 (均为可选)：
// bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
// inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
// update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
// componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
// unbind：只调用一次，指令与元素解绑时调用。

const dict = {
	curData: null,
	drag: function (el, data) {
		el.setAttribute('draggable', true);

		el.addEventListener('dragstart', (e) => {
			this.curData = data;
		}, false);

		el.addEventListener('dragend', () => {
			this.curData = null;
		}, false);
	},
	// drop 触发的条件需要把dragover 设为event.preventDefault();
	drop: function (el, callback) {
		el.addEventListener('drop', (e) => {
			if (this.curData) {
				callback(this.curData, e);
			}
		}, false);
	}
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
