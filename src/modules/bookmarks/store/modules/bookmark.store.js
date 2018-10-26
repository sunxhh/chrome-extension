const bookmarkMap = {
	// 获取所有的书签树
	getAllBookmarksTree: function () {
		return new Promise((resolve, rejuct) => {
			chrome.bookmarks.getTree(function (list) {
				resolve(list);
			})
		})
	},
	// 扁平化树取出所有的文件夹
	getFolderList: function (bookmarksTree, list) {
		bookmarksTree.forEach((mark) => {
			// 初始文件夹
			if (mark.parentId === undefined) {
				this.getFolderList(mark.children, list);
				return;
			}
			if (mark.url === undefined) {
				list.push(mark);
				this.getFolderList(mark.children, list);
				return;
			}
		});
	},
	// 去除文件夹下面的子文件夹
	deleteSubFolder: function (list) {
		list.forEach(function (folder) {
			folder.children = folder.children.filter((child) => {
				if (child.url) {
					return true;
				}
				return false;
			})
		})
	},
}
const store = {
	namespaced: true,
	state: {
		// bookmark的树
		bookmarkTree: [],
		// 选中的文件夹的id
		selectedFolderId: -1
	},
	getters: {

	},
	mutations: {
		changeBookmarkTree(state, payload) {
			state.bookmarkTree = payload;
		},
		// 修改选中的文件夹的id
		changeSelectedFolderId(state, payload) {
			state.selectedFolderId = payload;
		}
	},
	actions: {
		getBookmarkTree(context) {
			bookmarkMap.getAllBookmarksTree().then((list) => {
				let folderList = [];
				bookmarkMap.getFolderList(list, folderList);
				bookmarkMap.deleteSubFolder(folderList);
				context.commit('changeBookmarkTree', folderList);
			});
		}
	}
}
export default store;
