# chrome-extension
chrome-extension

### 目的
学习vue 写一个完整的chrome 扩展



目前进度计划
使用vuex 实现两侧滚动条同步








### 问题
1. 目前卡在截取网页快照上面了，没有找到好的解决方案暂且用替代方案（已完成替代解决方案）
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
（使用captureVisibleTab 进行截图，存储于indexDB中，下次进页面的时候进行获取）
////=========可行的！！！
