const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    pic: '',
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
    status: 0,
    navHeight: 0,

    data_user:[],



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight)
        that.setData({
          height_screen: res.windowHeight
        })
      }
    })
    this.setNavSize()

    this.setData({
      top_height: app.globalData.top_height
    })
    this.attached()
    console.log(options.awardid)

    wx.request({
      url: app.globalData.url +'getAwardPeople',
      data:{
        id: options.awardid
      },
      success:function(res){
        console.log(res)
        that.setData({
          data_user:res.data.data
        })

        console.log(res.data.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    this.animation = wx.createAnimation();
    this.setData({
      name: app.globalData.nickname,
      pic: app.globalData.avatarUrl,
    })
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

 
})