var app = getApp()
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
  whole:function(){
       wx.navigateTo({
         url: '',
       })
  },
  /**
     * 生命周期函数--监听页面加载
},

/**
* 生命周期函数--监听页面加载
*/
  onLoad: function (options) {
    var that = this;
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
//options.awardid
    var awardid=10;
    
    var userid = app.globalData.userid;
    console.log(userid)
    //获取参与人员
    wx.request({
      url: app.globalData.url + 'getAwardPeople',
      data: {
        'id': awardid
      },
      method: 'GET',
      success: function (res) {

        var cd = [];
        for (var i = 0; i < res.data.data.length; i++) {
          cd[i] = res.data.data[i].user__picture
        }
//先默认为7
        that.setData({
          canyu: cd,
          cd: cd.length
        })
      },
      fail: function (res) {
        console.log('fail')
      },
    })
// wx:wx.request({
//   url: app.globalData.url + 'getUserAwardState',
//   data: {
//     'id': awardid,
//     "userid": userid
//   },
//   method: 'GET',
//   success: function (res) {
//    var f=res.data.data;
//    console.log(f)
//   //  var jpname=[f[0].name1,f[0].name2,f[0].name3];
//   //  var jpnum=[f[0].num1,f[0].num2,f[0].num3];
//   //  var images=[f[0].pic1,f[0].pic2,f[0].pic3];
//   //  var date=f[0].time;
//   //  date = util.tsFormatTime(date, 'Y/M/D h:m:s');
//   //   that.setData({
//   //      index: f[0].way,//开奖方式
//   //      jpname: jpname,
//   //      jpnum: jpnum,
//   //      date: date,//开奖时间
//   //      kpnum: f[0].maxnum,//开奖人数
//   //      s: f[0].number,//奖品个数
//   //      jpms: f[0].information,
//   //      imgurls: images,
//   //      status:f[0].status,//抽奖状态
//   //   })

//   },
//   fail: function (res) {
//     console.log('fail')
//   },
// })

//判断是否可以抽奖
// wx.request({
//   url: app.globalData.url +'intoLottery',
//   data: {
//     'userid': userid ,
//     'id': awardid
//   },
//   method: 'GET',
//   success:function(res){
//     console.log(res.data.state)
//     // that.setData({
//     //   state: res.data.state,
//     //   level: res.data.data[0].level
//     // })
//     if (that.data.state == 'success')
//       that.setData({
//         could_join: false
//       })
//   },
//   fail:function(){
//     console.log('fail')
//   }
// })

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