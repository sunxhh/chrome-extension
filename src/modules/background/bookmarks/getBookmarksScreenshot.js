import {
	capture
} from 'common/js/capture';
import DB from 'common/js/indexDB';
import {
	postMessage,
	eventNames
} from 'common/js/channelEvents';

let dataBaseOpen = new DB({
	name: 'bookmark',
	keyPath: 'url',
	upgradeneeded: function (db, name, keyPath) {
		if (!db.objectStoreNames.contains(name)) {
			db.createObjectStore(name, {
				keyPath: keyPath
			});
		}
	},
}).init();

// 返回0 不存在，返回1 完全匹配，
function isBookmark(url) {
	let istrue = 0;
	return new Promise((resolve, reject) => {
		chrome.bookmarks.getTree(function (list) {
			function equalUrl(clist) {
				if (istrue) {
					return true;
				}
				for (let i = 0; i < clist.length; i++) {
					let cur = clist[i];
					if (cur.url && cur.url === url) {
						istrue = 1;
						return true;
					}
					if (cur.children) {
						equalUrl(cur.children);
					}
				}
			}
			equalUrl(list);

			resolve(istrue);
		});
	})
}

// 获取屏幕的截图并存储在indexdb中
function getBookmarksScreenshot(request, sender, sendResponse) {
	isBookmark(request.url).then((istrue) => {
		if (istrue) {
			capture().then((screenshotData) => {
				dataBaseOpen.then((db) => {
					db.getDataByKey('bookmark', request.url).then((data) => {
						let {
							result,
							store
						} = data;
						let dbData = {
							url: request.url,
							origin: request.origin,
							data: screenshotData
						};
						if (result) {
							store.put(dbData);
						} else {
							store.add(dbData);
						}
						postMessage(eventNames.changeBookmark, true);
					})
				});
			})
		}
	})

}

export default getBookmarksScreenshot;
