let postMessage = function (type, data) {
	let cast = new BroadcastChannel(type);
	cast.postMessage(data);
}

let listenMessage = function (type) {
	let cast = new BroadcastChannel(type);
	return new Promise((resolve) => {
		cast.addEventListener('message', function (ev) {
			resolve(ev);
		});
	})
}

export default {
	postMessage,
	listenMessage
}
