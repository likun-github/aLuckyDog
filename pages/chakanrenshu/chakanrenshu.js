// pages/chakanrenshu/chakanrenshu.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height_screen: 0,
    top_height: 0,
    background: 'rgba(255, 255, 255, 1)',
    color: 'rgba(0, 0, 0, 1)',
    titleText: '导航栏',
    titleImg: '',
    backIcon: '',
    homeIcon: '',
    fontSize: 16,
    iconHeight: 19,
    iconWidth: 58,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var awardid=options.awardid;
    var that = this;
    
    wx.request({
      url: app.globalData.url + 'getAwardPeople',
      data: {
        'id': awardid
      },
      method: 'GET',
      success: function (res) {

        var cd = [];
        for (var i = 0; i < res.data.data.length; i++) {
          cd[i] = res.data.data[i].user__picture
        }

        that.setData({
          canyu: cd,
          cd1: cd.length
        })
        if (cd.length <= 7)
          that.setData({
            cd: cd.length
          })
        else that.setData({
          cd: 7
        })
        console.log(that.data.canyu)
      },
      fail: function (res) {
        console.log('fail')
      },
    })
  },
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
  },


  setStyle: function () {
    var that = this,
      containerStyle, textStyle, iconStyle;
    containerStyle = [
      'background:' + that.data.background
    ].join(';');
    textStyle = [
      'color:' + that.data.color,
      'font-size:' + that.data.fontSize + 'px'
    ].join(';');
    iconStyle = [
      'width: ' + that.data.iconWidth + 'px',
      'height: ' + that.data.iconHeight + 'px'
    ].join(';');
    that.setData({
      containerStyle: containerStyle,
      textStyle: textStyle,
      iconStyle: iconStyle
    })
  },

  attached: function () {
    var that = this;
    that.setNavSize();
    that.setStyle();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})