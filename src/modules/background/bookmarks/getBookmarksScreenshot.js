import { capture } from 'common/js/capture';
import DB from 'common/js/indexDB';

let dataBaseOpen = new DB({
  name: 'bookmark',
  keyPath: 'url',
  upgradeneeded: function(db, name, keyPath) {
    if (!db.objectStoreNames.contains(name)) {
      db.createObjectStore(name, { keyPath: keyPath });
    }
  },
}).init();

function isBookmark(url) {
  let istrue = false;
  return new Promise((resolve, reject) => {
    chrome.bookmarks.getTree(function(list) {
      function equalUrl(list) {
        if (istrue) {
          return true;
        }
        for (let i = 0; i < list.length; i++) {
          let cur = list[i];
          if (cur.url && cur.url.indexOf(url) !== -1) {
            istrue = true;
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

function getBookmarksScreenshot(request, sender, sendResponse) {
  isBookmark(request.url).then((istrue) => {
    if (istrue) {
      capture().then((screenshotData) => {
        dataBaseOpen.then((db) => {
          db.getDataByKey('bookmark', request.url).then((data) => {
            let { result, store } = data;
            if (result) {
              store.put({
                url: request.url,
                data: screenshotData
              });
            } else {
              store.add({
                url: request.url,
                data: screenshotData
              });
            }
          })
        });
      })
    }
  })
}

function getUrlImgData() {
  return db.getDataByKey('bookmark', request.url).then((data) => {
    let { result, store } = data;

  })
}
export {
  getUrlImgData
};
export default getBookmarksScreenshot;
