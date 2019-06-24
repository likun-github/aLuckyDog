const app = getApp()
var util = require('../../utils/util.js');
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
    could_join: true,
    share_flag: false,
    cd: 7,
    canyu: ["/images/icn-zu@3x.png",
      "/images/icn-zu@3x.png",
      "/images/icn-zu@3x.png",
      "/images/icn-zu@3x.png",
      "/images/icn-zu@3x.png",
      "/images/icn-zu@3x.png",
      "/images/icn-zu@3x.png",
    ],
    state: '',//个人对于奖项的状态
    awardid: '',
    imgurls: [],
    jpms: '',
    index: 1,//抽奖方式
    jpname: '',
    jpnum: 0,
    animation: '',
    date: '',//日期
    s: 1,
    level: 0,//奖项状态
    kpnum: 0,//开奖人数||最多抽奖人数
    userid:''//用户登录
  },

  /**
     * 生命周期函数--监听页面加载
},

/**
* 生命周期函数--监听页面加载
*/
  onLoad: function (options) {
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight)
        that.setData({
          height_screen: res.windowHeight
        })
      }
    })
    this.setData({
      top_height: app.globalData.top_height
    })
    this.attached()
    wx.hideShareMenu();

    var awardid= options.awardid;
    var that = this;
    var userid = app.globalData.userid

wx:wx.request({
  url: app.globalData.url + 'intoAward',
  data: {
    'id': awardid
  },
  method: 'GET',
  success: function (res) {
   var f=res.data.data;
   var jpname=[f.name1,f.name2,f.name3];
   var jpnum=[f.num1,f.num2,f.num3];
   var images=[f.pic1,f.pic2,f.pic3];
   var date=f.time;
   date = util.tsFormatTime(date, 'Y/M/D h:m:s');
    that.setData({
       index: f.way,//开奖方式
       jpname: jpname,
       jpnum: jpnum,
       date: date,//开奖时间
       kpnum: f.maxnum,//开奖人数
       s: f.number,//奖品个数
       jpms: f.information,
       imgurls: images,
       status:f.status,//抽奖状态
    
    })
  },
  fail: function (res) {
    console.log('fail')
  },
})

//判断是否可以抽奖
wx.request({
  url: app.globalData.url +'intoLottery',
  data: {
    'userid': userid ,
    'id': awardid
  },
  method: 'GET',
  success:function(res){
    console.log(res.data.state)
    that.setData({
      state: res.data.state,
      level: res.data.data[0].level
    })
    if (that.data.state == 'success')
      that.setData({
        could_join: false
      })
  },
  fail:function(){
    console.log('fail')
  }
})

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation = wx.createAnimation();
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
    if (that.data.state != 'success')
      wx.showModal({
        title: '提示',
        content: '有人参与抽奖后，你将无法再编辑抽奖信息，是否确认参与该抽奖？',
        confirmText: '确认参与',
        cancelText: '我再看看',
        confirmColor: 'darkred',
        cancelColor: 'darkgray',
        success(res) {
          if (res.confirm) {
            wx.request({
              url: app.globalData.url + 'intoLottery',
              data: {
                'userid': app.globalData.userid,
                'id': that.data.awardid
              },
              method: 'GET',
              success: function (res) {
                console.log(res.data.state)
                that.setData({
                  state: res.data.state,
                  level: res.data.data[0].level
                })
                if (that.data.state == 'success')
                  that.setData({
                    could_join: false
                  })
              },
              fail: function (res) {
                console.log('fail')
              },
            })

            console.log('用户点击确定分享')


          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }

      })



  },

  showmodels_tips: function () {
    var that = this
        //     wx.request({
        //       url: app.globalData.url + 'intoShare',
        //       data: {
        //         'id': that.data.awardid
        //       },
        //       method: 'GET',
        //       success: function (res) {
        //         console.log(res.data.state)
        //         that.setData({
        //           state: res.data.state
        //         })
        //         if (that.data.state == 'success')
        //           that.setData({
        //             could_join: false
        //           })
        // }
      //})
    that.setData({
      share_flag:true
        })
    this.translate()
  },
  go_to_lotteryCreate:function(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  share_lottery: function () {
    this.setData({
      share_flag: true,
    })
    this.translate()

  },

  translate: function () {
    this.animation.translate(0, -120).step()
    this.setData({ animation: this.animation.export() })
  },



  cancel_share: function () {
    this.setData({
      share_flag: false,
    })
    this.translate_no()
  },

  translate_no: function () {
    this.animation.translate(0, 120).step()
    this.setData({ animation: this.animation.export() })
  },

})