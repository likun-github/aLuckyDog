// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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


  //心愿--查看
  aspiration:function(){
    wx.navigateTo({
      url: '/pages/aspiration/aspiration',
    })
  },


  lottery_view_1:function(){
    wx.navigateTo({
      url: '/pages/lottery_view_1/lottery_view_1',
    })
  },

  lottery_view_2: function () {
    wx.navigateTo({
      url: '/pages/lottery_view_2/lottery_view_2',
    })
  },

  lottery_view_3: function () {
    wx.navigateTo({
      url: '/pages/lottery_view_3/lottery_view_3',
    })
  },
  

  go_to_remainder_money:function(){
    wx.navigateTo({
      url: '/pages/remainder_money/remainder_money',
    })
  }
})