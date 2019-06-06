//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    status: 0,
    navHeight:0,
  },
 


  onLoad: function() {
    this.setNavSize()
      
      
  },

  // 通过获取系统信息计算导航栏高度
  setNavSize: function () {
    var that = this
      , sysinfo = wx.getSystemInfoSync()
      , statusHeight = sysinfo.statusBarHeight
      , isiOS = sysinfo.system.indexOf('iOS') > -1
      , navHeight;
    if (!isiOS) {
      navHeight = 48;
    } else {
      navHeight = 44;
    }
    that.setData({
      status: statusHeight,
      navHeight: navHeight
    })
    console.log(that.data.status,that.data.navHeight)
  },

  onPullDownRefresh(e) {
    setTimeout(function () { 
      // 下拉刷新
      wx.stopPullDownRefresh()
    }, 2000)
 
  },


  
})