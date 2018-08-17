import dict from './dict.js';

function getDictFn(key) {
	let list = key.split('.');
	let fn = dict;
	for (let i = 0; i < list.length; i++) {
		fn = fn[list[i]];
		if (!fn) {
			break;
		}
	}
	if (typeof fn !== 'function') {
		fn = function () {}
	}
	return fn;
}
// 绑定监听onMessage事件
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	let key = request.key || '';
	getDictFn(key)(request, sender, sendResponse);
	return true;
});

// 书签创建的时候截取屏幕
chrome.bookmarks.onCreated.addListener(function (id, bookmark) {
	let request = {
		key: 'bookmarks.getBookmarksScreenshot',
		origin: bookmark.url,
		url: bookmark.url
	}
	getDictFn(request.key)(request);
});
