function capture() {
  return new Promise((resolve, reject) => {
    chrome.tabs.captureVisibleTab(null, {
      format: 'jpeg',
      quality: 100
    }, function(imgData) {
      if (imgData) {
        resolve(imgData);
      }
    })
  })
}
module.exports.capture = capture;
