// components/profile/profile.js
const app =getApp()
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


    avatarUrl: '',
    nickname: '',
    all_lottery:[],
    create_lottery:[],
    all_lottery_length:0,
    create_lottery_length:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //心愿--查看
    aspiration: function () {
      wx.navigateTo({
        url: '/pages/aspiration/aspiration',
      })
    },


    lottery_view_1: function () {
      wx.navigateTo({
        url: '/pages/lottery_view_1/lottery_view_1',
      })
    },

    lottery_view_2: function () {
      wx.navigateTo({
        url: '/pages/lottery_view_2/lottery_view_2',
      })
    },

    lottery_view_3: function () {
      wx.navigateTo({
        url: '/pages/lottery_view_3/lottery_view_3',
      })
    },


    go_to_remainder_money: function () {
      wx.navigateTo({
        url: '/pages/remainder_money/remainder_money',
      })
    },

    go_to_selfpage: function () {
      wx.navigateTo({
        url: '/pages/selfpage/selfpage',
      })
    },


    go_to_more: function () {
      wx.navigateTo({
        url: '/pages/more/more',
      })
    },


    common_question: function () {
      wx.navigateTo({
        url: '/pages/question/question',
      })
    },


    address: function () {
      // wx.navigateTo({
      //   url: '/pages/address/address',
      // })
      wx.chooseAddress({
        success(res) {
          console.log(res.userName)
          console.log(res.postalCode)
          console.log(res.provinceName)
          console.log(res.cityName)
          console.log(res.countyName)
          console.log(res.detailInfo)
          console.log(res.nationalCode)
          console.log(res.telNumber)
        }
      })
      
    }

  },

  ready:function(){
    var that = this
    console.log("ready")
    this.setData({
      avatarUrl: app.globalData.avatarUrl,
      nickname: app.globalData.nickname,
    })

    wx.showLoading({
      title: '加载中',
    })
  

    wx.request({
      url: app.globalData.url+'mysaward',
      method: 'get',
      data: {
        userid: 1
      },
      success: function (res) {
        wx.hideLoading();
        console.log(res.data)
        return typeof cb == "function" && cb(res.data)
        that.setData({
          all_lottery:res.one,
          create_lottery:res.two,
          all_lottery_length: res.one.length,
          create_lottery_length: res.two.length,
        })
        console.log(that.data.all_lottery_length, that.data.create_lottery_length)
      },
      fail: function () {
        wx.hideLoading();
        wx.showModal({
          title: '网络错误',
          content: '网络出错，请刷新重试',
          showCancel: false
        })
        return typeof cb == "function" && cb(false)
      }
    })

   
  },

})

  



