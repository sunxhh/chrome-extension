import OneBookmark from '../one-bookmark/one-bookmark.vue';
import BookmarkFolder from '../bookmark-folder/bookmark-folder.vue';
import {
	toTop
} from 'common/js/dom';
import {
	mapState,
	mapActions
} from 'vuex';

export default {
	data() {
		return {
			selectedFolderId: undefined,
			localCount: 1
		};
	},
	components: {
		'one-bookmark': OneBookmark,
		'bookmark-folder': BookmarkFolder
	},
	created: function () {
		this.getBookmarkTree();
		// 书签创建的时候截取屏幕
		chrome.bookmarks.onCreated.addListener((id, bookmark) => {
			setTimeout(() => {
				this.getBookmarkTree();
			}, 2000)
		});
	},
	methods: {
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
		},
		...mapActions('bookmark', [
			'getBookmarkTree'
		])
	},
	computed: {
		...(mapState('bookmark', {
			folderList: (state) => {
				return state.bookmarkTree
			},
		}))
	}
};
