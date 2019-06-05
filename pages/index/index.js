//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
 


  onLoad: function() {
  
      
  },

  onPullDownRefresh(e) {
    setTimeout(function () { 
      // 下拉刷新
      wx.stopPullDownRefresh()
    }, 2000)
 
  }


  
})