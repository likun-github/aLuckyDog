// pages/advice/advice.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'',
    contact:'',
    top_height: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      top_height: app.globalData.top_height
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

  },


  content:function(e){
    console.log(e.detail.value)
    this.setData({
      content: e.detail.value

    })
  },



  contact: function (e) {
    console.log(e.detail.value)
    this.setData({
      contact: e.detail.value
    })
  },

  feedback:function(e){
    console.log(e)
    console.log(this.data)
    wx.showToast({
      title: '我们感谢批评',
    })
    var that =this
    wx.request({
      url: 'http://1397608894-qq.vicp.io:42685/lottery/getAdvice',

      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      data: {
        userid:app.globalData.userid,
        advice_content: that.data.content,
        advicer_contact: that.data.contact,

      },
      success: function (res) {
       
        if (res.statusCode == 200) {
          console.log(res)
          wx.redirectTo({
            url: '/pages/index/index',
          })
        } else {
          console.log("index.js wx.request CheckCallUser statusCode" + res.statusCode);
        }
      },
      fail: function () {
        console.log("index.js wx.request CheckCallUser fail");
      },
      complete: function () {
        // complete
      }
    })
  },


})