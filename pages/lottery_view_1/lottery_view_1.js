//index.js
//获取应用实例
const app = getApp()
var common = require("../../common/common.js")
var util = require('../../utils/util.js')
Page({
  data: {
    status: 0,
    navHeight: 0,
    pages_index: 1,
    bindtap_1: 1,
   

    home_show_data: [],
    user_list: [],

    avatarUrl: '',
    nickname: '',
  },



  onLoad: function () {
    console.log(app.globalData, 'index')
    this.setData({
      avatarUrl: app.globalData.avatarUrl,
      nickname: app.globalData.nickname,
    })
    this.setNavSize()

    //获取
    var that = this
    wx.request({
      url: app.globalData.url + 'mysaward',
      data:{
        userid:app.globalData.userid,

      },
      success: function (res) {
        console.log(res.data.one)

        // for (var i = 0; i < res.data.award_data.length; i++) {
        //   if (res.data.award_data[i].time != '') {
        //     res.data.award_data[i].time = util.tsFormatTime(res.data.award_data[i].time * 1000, 'Y-M-D h:m:s')
        //   }
        //   res.data.award_data[i].pic1 = app.globalData.url_uploads + res.data.award_data[i].pic1

        // }

        // common.home_lottery = res.data.award_data
        // console.log(common.home_lottery)


        // that.setData({
        //   home_show_data: res.data.award_data
        // })

      }
    })




  },

  onShow: function () {



  },




  // 通过获取系统信息计算导航栏高度
  setNavSize: function () {
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











  


})