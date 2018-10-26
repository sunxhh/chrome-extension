import OneBookmark from '../one-bookmark/one-bookmark.vue';
import BookmarkFolder from '../bookmark-folder/bookmark-folder.vue';
import {
	toTop
} from 'common/js/dom';
import {
	mapState,
	mapActions,
	mapMutations
} from 'vuex';

import {
	listenMessage,
	eventNames
} from 'common/js/channelEvents';

export default {
	data() {
		return {
			localCount: 1
		};
	},
	components: {
		'one-bookmark': OneBookmark,
		'bookmark-folder': BookmarkFolder
	},
	created: function () {
		this.getBookmarkTree();
		listenMessage(eventNames.changeBookmark).then(() => {
			this.getBookmarkTree();
		});
	},
	computed: {
		...(mapState('bookmark', {
			folderList: (state) => {
				return state.bookmarkTree
			},
			selectedFolderId: (state) => {
				return state.selectedFolderId
			}
		}))
	},
	watch: {
		selectedFolderId: {
			immediate: true,
			handler(val) {
				if (val === -1) {
					return;
				}
				this.scrollToDom(val);
			}
		}
	},
	methods: {
		// 滚动
		scrollToDom: function (folderId, offset) {
			let dom = this.$refs['parent_folder_' + folderId][0];
			let wrapper = this.$refs['bookmarks_content'];
			let top = toTop(dom, wrapper) + (offset || 0);
			wrapper.scrollTop = top;
		},
		...mapActions('bookmark', [
			'getBookmarkTree'
		]),
		...mapMutations([
			'changeSelectedFolderId'
		]),
	}
};
