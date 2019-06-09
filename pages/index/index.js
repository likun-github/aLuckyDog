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
    // console.log(that.data.status,that.data.navHeight)
    app.globalData.top_height = that.data.status + that.data.navHeight
    console.log(app.globalData.top_height)
  },

  onPullDownRefresh(e) {
    setTimeout(function () { 
      // 下拉刷新
      wx.stopPullDownRefresh()
    }, 2000)
 
  },

  lottery:function(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/lottery_detail/lottery_detail',
    })
  }
  
})