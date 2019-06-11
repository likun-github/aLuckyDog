// pages/award/award.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    navHeight: 0,
    tempFilePaths: '',
    item: '../../static/1.jpg',
  },
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
    console.log(that.data.status, that.data.navHeight)
  },
  choosepic: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths, res);
        that.setData({
          item: that.data.images.concat(tempFilePaths),
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setNavSize();
    console.log(this.data.status);
    console.log(this.data.navHeight);
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

  },


  back:function(){
    wx.navigateBack({
      delta:1
    })
    app.globalData.page_index = app.globalData.page_old_index
    console.log('back', app.globalData.page_index, app.globalData.page_old_index)
  }
})