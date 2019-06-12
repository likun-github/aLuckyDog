// pages/lottery_detail/lottery_detail.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    text: "如果你想安安静静抽奖，期待成为幸运儿 — — 抽奖助手就是你需要的大型福利池。\n\n在这里，你可以每天来参与免费的抽奖：从口红到包包，从新品手机到黑科技......大量持续更新，一定有你所爱。\n\n同时，抽奖助手也是一个强大的互动工具。\n\n如果你想跟好友互动、分享闲置品：\n\n用一个抽奖来解决！亦或用「皮一下」功能，代替不好意思的邀请，找个人买单，抽个人周末一起看电影....朋友圈里，应该多一些参与的温度。\n\n如果你是公众号主：\n\n由什么比一个抽奖，更适合活跃粉丝，运营活动？来绑定抽奖助手小程序，多功能任你选择，灵巧派发福利~\n\n对企业品牌、小程序主......这里是你需要的宣发地。\n\n如果你想更简单、高效的使用抽奖助手，点击下方↓↓↓蓝色链接，查看「已发起的抽奖可上首页，发起者营销数据开放」吧。\n\n",
    text1: "金榜极志愿，填出好未来。一款将考生分数价值最大化的志愿填报辅助产品！覆盖全国 2600 多所高校近 5 年招生录取数据，紧随高考政策，支持大类招生，江苏选测及浙江上海新高考。基于 MHOF 算法，结合最新考试成绩、招生计划，预测出投档线范围。实时监控全网报考动态，统计各省报考「拥堵」状况，降低被调剂风险，提升录取概率，让广大考生圆梦心仪大学。",
    could_join: true,
    scrollHeight: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // let scrollHeight = wx.getSystemInfoSync().windowHeight;

    this.setData({
      height: app.globalData.top_height,
      //   scrollHeight: scrollHeight + app.globalData.top_height
    })


   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


  join: function() {
    this.setData({
      could_join: !this.data.could_join
    })

  },


  scrolltolower: function(e) {
    console.log('??:', e)
   
  },

  // scrolltolower:

  lower: function(e) {

    console.log(e)

  },
  // onPageScroll: function (e) {
  //   console.log(e)
  // },


  // 滚动条滚到顶部的时候触发
  upper: function(e) {
    console.log(e)
  },
  // 滚动条滚到底部的时候触发
  lower: function(e) {
    console.log(e)
  },
  // 滚动条滚动后触发
  scroll: function(e) {
    console.log(e)
  },
  // 点击按钮切换到下一个view
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  //通过设置滚动条位置实现画面滚动
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },


  lower:function(e){
    console.log(e)
     var animation = wx.createAnimation({
      duration: 720,
      timingFunction: 'linear',
      delay: 0
    });
    animation.opacity(1).translate(0, -25).step()
    this.setData({
      show_time: animation.export()
    })
  }

})