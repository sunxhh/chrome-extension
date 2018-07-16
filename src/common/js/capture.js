function capture() {
  return new Promise((resolve, reject) => {
    chrome.tabs.captureVisibleTab(null, {
      format: "jpeg",
      quality: 100
    }, function(imgData) {
      // if (imgData) {
      //   var img = new Image;
      //   img.onload = function() {
      //     resolve(img)
      //   };
      //   img.src = imgData
      // }
    })
  })
}
module.exports.capture = capture;
