//index.js
//获取应用实例
const app = getApp()
var common = require("../../common/common.js")
Page({
  data: {
    status: 0,
    navHeight: 0,
    pages_index: 1,
    bindtap_1: 1,
    navData: [{
      name: "首页", //文本
      current: 1, //是否是当前页，0不是  1是
      style: 0, //样式
      ico: '', //不同图标
      fn: 'to_home' //对应处理函数
    }, {
      name: "发起抽奖",
      current: 0,
      style: 1,
      ico: '',
      fn: 'to_lottery'
    }, {
      name: "我的",
      current: 0,
      style: 2,
      ico: '',
      fn: 'to_me'
    }, ],

    gift_list: [],
    user_list: [],

    avatarUrl: '',
    nickname: '',
  },



  onLoad: function() {
    console.log(app.globalData,'index')
    this.setData({
      avatarUrl: app.globalData.avatarUrl,
      nickname: app.globalData.nickname,
    })
    this.setNavSize()

  

   

  },

  onShow: function() {
    // this.setData({
    //   page_index: app.globalData.page_index
    // })
  },
  // 通过获取系统信息计算导航栏高度
  setNavSize: function() {
    var that = this,
      sysinfo = wx.getSystemInfoSync(),
      statusHeight = sysinfo.statusBarHeight,
      isiOS = sysinfo.system.indexOf('iOS') > -1,
      navHeight;
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
    if (this.data.navData[0].current == 1) {
      setTimeout(function() {
        // 下拉刷新
        wx.stopPullDownRefresh()
      }, 2000)
    } else {
      setTimeout(function() {
        // 下拉刷新
        wx.stopPullDownRefresh()
      }, 1)
    }


  },

  lottery: function(e) {
    // console.log(e)
    wx.navigateTo({
      url: '/pages/lottery_detail/lottery_detail',
    })
  },


  to_home: function() {
    let temp = this.data.navData

    temp[0].current = 1
    temp[1].current = 0
    temp[2].current = 0

    this.setData({
      navData: temp,
      pages_index: 1,
    })
  },

  to_lottery: function() {
    wx.navigateTo({
      url: '/pages/award/award',
    })
  },

  to_me: function() {
    let temp = this.data.navData

    temp[0].current = 0
    temp[1].current = 0
    temp[2].current = 1

    this.setData({
      navData: temp,
      pages_index: 3
    })
  },

  aspiration: function() {
    wx.navigateTo({
      url: '/pages/aspiration/aspiration',
    })
  },



 



})