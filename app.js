//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    var that =this
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.getStorage({
      key: "information",
      success:function(res){
        console.log("information",res.data)
        that.globalData.userid = res.data.userid
        that.globalData.name = res.data.name
        that.globalData.avatarUrl = res.data.avatarUrl
        that.globalData.nickname = res.data.nickname
        that.globalData.teamname = res.data.teamname
        that.globalData.account = res.data.account
       
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  
  getuserinformation: function () {
    var information = wx.getStorageSync('information')

    if (information) {
      this.globalData.login = true;
      //   this.setData({
      //     hq: false,
      //   })
      // } else {
      //   wx.hideTabBar({})
    }
    else {
      this.globalData.login = false;
    }
    if (information.status == 2) {

      this.globalData.nickname = information.nickname;
      this.globalData.avatarUrl = information.avatarUrl;


      this.globalData.status = information.status;
      this.globalData.userid = information.userid;
      this.globalData.name = information.name;

      this.globalData.time = information.number;
      this.globalData.teamname = information.teamname;
      this.globalData.account = information.account;

    }
    else {
      this.globalData.status = information.status;
      this.globalData.userid = information.userid;
      this.globalData.avatarUrl = information.avatarUrl;
      this.globalData.nickname = information.nickname;


    }
  },




  globalData: {
    userInfo: null,
    top_height:0,
 
    login: '',
    userid: '',
    nickname: '',
    avatarUrl: '',
    gender: 0,

    account: '',
    name: '',

    time: '',
    status: '',
    time: '',

    height: '',

    country: '',
    city: '',
    province: '',
    language: "zh_CN",

  }
})