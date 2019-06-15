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
    could_join: true,
    share_flag:false,
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

  join: function () {
    var that = this
    wx.showModal({
      title: '提示',
      content: '有人参与抽奖后，你将无法再编辑抽奖信息，是否确认参与该抽奖？',
      confirmText: '确认参与',
      cancelText: '我再看看',
      confirmColor: 'darkred',
      cancelColor: 'darkgray',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定分享')
          that.setData({
            could_join: !that.data.could_join
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }

    })
   


  },

  go_to_lotteryCreate:function(){
    wx.navigateTo({
      url: '/pages/award/award',
    })
  },


  showmodels_tips:function(){
    var that = this
    wx.showModal({
      title: '提示',
      content: '有人参与抽奖后，你将无法再编辑抽奖信息，是否确认分享该抽奖？',
      confirmText:'确认分享',
      cancelText:'我再看看',
      confirmColor:'darkred',
      cancelColor:'darkgray',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定分享')
          that.setData({
            could_join: !that.data.could_join
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },

  share_lottery:function(){
    this.setData({
      share_flag:true,
    })
  }

})