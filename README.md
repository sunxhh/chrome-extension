# chrome-extension
chrome-extension

### 问题
1. 目前卡在截取网页快照上面了，没有找到好的解决方案暂且用替代方案
替代方案
iframe中加载url，加载完成以后调用chrome api chrome.tabs.captureVisibleTab 截取url显示区的图片然后保存
/////========结论==不行 
该api不能在扩展窗口使用。。。
