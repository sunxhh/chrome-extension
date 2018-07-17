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
      bindOnload();
    }
  })
}
export default getBookmarksScreenshot;
