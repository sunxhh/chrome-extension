import OneBookmark from '../one-bookmark/one-bookmark.vue';
import BookmarkFolder from '../bookmark-folder/bookmark-folder.vue';
import {
	toTop
} from 'common/js/dom';

export default {
	data() {
		return {
			folderList: [],
			selectedFolderId: undefined
		};
	},
	components: {
		'one-bookmark': OneBookmark,
		'bookmark-folder': BookmarkFolder
	},
	created: function () {
		this.getAllBookmarksTree().then((list) => {
			let folderList = [];
			this.getFolderList(list, folderList);
			this.deleteSubFolder(folderList);
			this.folderList = folderList;
		})
	},
	methods: {
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
		// 选中folder
		selectFolder: function (folder) {
			this.selectedFolderId = folder.id ? folder.id : folder;
			let folderBookmarkDom = this.$refs['parent_folder_' + folder.id][0];

			this.scrollToDom(folderBookmarkDom);
		},
		scrollToDom: function (dom, offset) {
			let wrapper = this.$refs['bookmarks_content'];
			let top = toTop(dom, wrapper) + (offset || 0);
			wrapper.scrollTop = top;
		}
	}
};
