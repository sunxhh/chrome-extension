function isBookmark(url) {
  chrome.bookmarks.getTree(function(list) {
    function equalUrl(folder){

    }
  });
}


function getBookmarksScreenshot(request, sender, sendResponse) {
  if (!isBookmark(request.url)) {
    return;
  }
  sendResponse(123);
}
export default getBookmarksScreenshot;
