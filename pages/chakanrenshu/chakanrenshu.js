// pages/chakanrenshu/chakanrenshu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this
    
    wx.request({
      url: app.globalData.url + 'getAwardPeople',
      data: {
        'id': that.data.awardid
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