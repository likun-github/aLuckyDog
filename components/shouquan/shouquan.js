// component/shouquan/shouquan.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    hq: false,

  },
  ready: function () {
    console.log("app.globalData", app.globalData)
    if (app.globalData.userid) {
      return ''
    }
    else {
      this.setData({
        hq: true,
      })
    
    }


  },
  /**
   * 组件的方法列表
   */
  methods: {

    onGotUserInfo(e) {
      
      if (e.detail.errMsg) {
        app.globalData.avatarUrl = e.detail.userInfo.avatarUrl;
        app.globalData.nickname = e.detail.userInfo.nickName;
        app.globalData.gender=e.detail.userInfo.gender;
        var that = this
        wx.login({
          success: res => {
            console.log("微信小程序用户登录：", res)
            wx.request({
              url: app.globalData.url + 'login',
              data: {
                'nickname': app.globalData.nickname,
                'gender': app.globalData.gender,
                'code': res.code,
                'picture': app.globalData.avatarUrl,
              },
              success: (res) => {
                app.globalData.userid=res.data.userid;
                app.globalData.status=res.data.status;
                var information = {
                  'userid': res.data.userid,
                  'status': res.data.status,
                  'nickname': app.globalData.nickname,
                  'avatarUrl': app.globalData.avatarUrl,
                }

                wx.setStorage({
                  key: 'information',
                  data: information,
                })


              },
            })
          }
        })

        this.setData({
          hq: false,
        })
       
      } else {
        wx.showModal({
          title: '获取失败',
          content: '',
        })
      }
    },






  }
})