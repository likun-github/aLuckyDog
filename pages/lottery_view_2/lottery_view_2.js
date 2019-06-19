const app = getApp()
var common = require("../../common/common.js")
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top_height: 0,
    data: [],
    data_wait: [],
    data_over: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      top_height: app.globalData.top_height,
      data: common.create_lottery,
    })
    console.log('我发起的:',this.data.data)

    this.divide(this.data.data)
    console.log(this.data)
  },

  //0 未开奖，4 未中奖
  divide: function (data) {
    let data_wait_temp = []
    let data_over_temp = []
    let temp = data
    for (var i = 0; i < data.length; i++) {
      if (data[i].status == 0) {

        data[i].pic1 = "https://images2017.cnblogs.com/blog/1274477/201801/1274477-20180109191501941-2145316830.png"
        data[i].pic2 = "https://images2017.cnblogs.com/blog/1274477/201801/1274477-20180109191501941-2145316830.png"
        data[i].pic3 = "https://images2017.cnblogs.com/blog/1274477/201801/1274477-20180109191501941-2145316830.png"
        data[i].time = util.tsFormatTime(data[i].time * 1000, 'Y-M-D h:m:s')
        console.log(data[i].time)
        data_wait_temp.push(data[i])
      } else {
        data[i].pic1 = "https://images2017.cnblogs.com/blog/1274477/201801/1274477-20180109191501941-2145316830.png"
        data[i].pic2 = "https://images2017.cnblogs.com/blog/1274477/201801/1274477-20180109191501941-2145316830.png"
        data[i].pic3 = "https://images2017.cnblogs.com/blog/1274477/201801/1274477-20180109191501941-2145316830.png"
        data[i].time = util.tsFormatTime(data[i].time * 1000, 'Y-M-D h:m:s')
        console.log(data[i].time)
        data_over_temp.push(data[i])
      }
    }
    this.setData({
      data_wait: data_wait_temp,
      data_over: data_over_temp,
    })
    console.log(this.data)
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