chrome.runtime.sendMessage(null, {
  key: 'bookmarks.getBookmarksScreenshot',
  origin: location.origin,
  url: location.href
}, {}, function(a) {
  console.log('content------in');
})
