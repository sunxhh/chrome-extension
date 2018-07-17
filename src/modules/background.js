import axios from 'axios';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  ajax(request, sendResponse);
  return true;
});

/* ajax同步请求函数封装 */
function ajax(request, callback) {
  axios({
    method: request.method || 'post',
    url: request.url,
    data: request.data || {}
  }).then((res) => {
    callback(res);
  });
}