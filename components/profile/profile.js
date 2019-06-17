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
      wx.navigateTo({
        url: '/pages/address/address',
      })
    }

  },

  ready:function(){
    console.log("ready")
    this.setData({
      avatarUrl: app.globalData.avatarUrl,
      nickname: app.globalData.nickname,
    })
  }

})

  



