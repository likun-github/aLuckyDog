const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    ask_answer:[
      {
        ask:'如何让发起的抽奖展示在首页？',
        answer: '请关注公众号 《活动抽奖》，点击底部菜单栏[自助首页]，购买后可自助.上首页。如有疑问，或需上首页「推荐福利」，请联系商务人员。',
        look:false,
      }, 
      {
        ask: '如何让发起的抽奖展示在首页？',
        answer: '请关注公众号 《活动抽奖》，点击底部菜单栏[自助首页]，购买后可自助.上首页。如有疑问，或需上首页「推荐福利」，请联系商务人员。',
        look: false,
      },
      {
        ask: '如何让发起的抽奖展示在首页？',
        answer: '请关注公众号 《活动抽奖》，点击底部菜单栏[自助首页]，购买后可自助.上首页。如有疑问，或需上首页「推荐福利」，请联系商务人员。',
        look: false,
      },
      {
        ask: '如何让发起的抽奖展示在首页？',
        answer: '请关注公众号 《活动抽奖》，点击底部菜单栏[自助首页]，购买后可自助.上首页。如有疑问，或需上首页「推荐福利」，请联系商务人员。',
        look: false,
      },
    
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      top_height: app.globalData.top_height
    })
    this.attached()
    wx.hideShareMenu();
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
  // 返回事件
  back: function () {
    wx.navigateBack({
      delta: 1
    })
    this.triggerEvent('back', {
      back: 1
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

  show_answer:function(res){
    console.log(res.currentTarget.dataset.index)
    var index = res.currentTarget.dataset.index
    let temp = this.data.ask_answer
    temp[index].look = !temp[index].look
    this.setData({
      ask_answer:temp
    })
  },


  go_to_advice:function(){
    wx.navigateTo({
      url: '/pages/advice/advice',
    })
  }
})