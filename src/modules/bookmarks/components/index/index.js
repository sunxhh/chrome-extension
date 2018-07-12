import OneBookmark from '../one-bookmark/one-bookmark.vue';
import BookmarkFolder from '../bookmark-folder/bookmark-folder.vue';
export default {
  data() {
    return {
      folderList: []
    };
  },
  components: {
    'one-bookmark': OneBookmark,
    'bookmark-folder': BookmarkFolder
  },
  created: function() {
    this.getAllBookmarksTree().then((list) => {
      let folderList = [];
      this.getFolderList(list, folderList);
      this.folderList = folderList;
    })
  },
  methods: {
    // 获取所有的书签树
    getAllBookmarksTree: function() {
      return new Promise((resolve, rejuct) => {
        chrome.bookmarks.getTree(function(list) {
          resolve(list);
        })
      })
    },
    // 扁平化树取出所有的文件夹
    getFolderList: function(bookmarksTree, list) {
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
    }
  }
};
