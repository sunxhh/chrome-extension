// console.log(chrome.runtime.getURL('dist/background.js'))


chrome.runtime.sendMessage(null, {
  key: "bookmarks.getBookmarksScreenshot"
}, {}, function(a) {
  console.log(a)
})
