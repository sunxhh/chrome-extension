chrome.runtime.sendMessage(null, {
  key: "bookmarks.getBookmarksScreenshot",
  url: location.host
}, {}, function(a) {
  console.log(a)
})
