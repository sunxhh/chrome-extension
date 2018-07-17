# chrome-extension
chrome-extension

### 问题
1. 目前卡在截取网页快照上面了，没有找到好的解决方案暂且用替代方案
方案 1
iframe中加载url，加载完成以后调用chrome api chrome.tabs.captureVisibleTab 截取url显示区的图片然后保存
/////========结论==不行 
该api不能在扩展窗口使用。。。
方案 2
打开新窗口打开url，插入js 
检测是否在书签中，检测是否已经保存有截图
待页面加在完成之后使用
html2canvas 或者 chrome api chrome.tabs.captureVisibleTab（优先考虑）
将网页画好返回到background.js 进行处理并存储
////=========尝试中。。。