// pages/lottery_detail/lottery_detail.js

const app = getApp()
var util = require('../../utils/util.js')
var common = require("../../common/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    text: "如果你想安安静静抽奖，期待成为幸运儿 — — 抽奖助手就是你需要的大型福利池。\n\n在这里，你可以每天来参与免费的抽奖：从口红到包包，从新品手机到黑科技......大量持续更新，一定有你所爱。\n\n同时，抽奖助手也是一个强大的互动工具。\n\n如果你想跟好友互动、分享闲置品：\n\n用一个抽奖来解决！亦或用「皮一下」功能，代替不好意思的邀请，找个人买单，抽个人周末一起看电影....朋友圈里，应该多一些参与的温度。\n\n如果你是公众号主：\n\n由什么比一个抽奖，更适合活跃粉丝，运营活动？来绑定抽奖助手小程序，多功能任你选择，灵巧派发福利~\n\n对企业品牌、小程序主......这里是你需要的宣发地。\n\n",
    text1: "",
    could_join: false,
    scrollHeight: 0,
    data_lottery: [],
    pic: [],
    cd:'',
    canyu:[],
    state:0,
    awardid:'',


    



  },

  /**
   * 生命周期函数--监听页面加载
   */
  whole: function () {
    wx.navigateTo({
      url: '/pages/chakanrenshu/chakanrenshu?awardid=' + this.data.awardid,
    })
  },
  onLoad: function(options) {

    let that = this
    // 获取到屏幕的宽高等信息
    wx: wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        })
      }
    })


    // let scrollHeight = wx.getSystemInfoSync().windowHeight;

    this.setData({
      height: app.globalData.top_height,
      //   scrollHeight: scrollHeight + app.globalData.top_height
    })
    console.log(options.id)
   
    var awardid=options.id;
    that.setData({
      awardid:awardid
    })
    var userid=app.globalData.userid;

    //判断是否可以抽奖
    var state = 0;
    wx.request({
      url: app.globalData.url + 'checkLottery',
      data: {
        'userid': userid,
        'id': awardid
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        state = res.data.state;
        that.setData({
          state: state,
        })
        console.log(state)
        if (state == 1){
          that.setData({
            could_join: true,
          })}
          else {
          that.setData({
            could_join: false,
          })
          }
      },
      fail: function (res) {
        console.log('fail');
      },
    })

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

    wx.request({
      url: app.globalData.url + 'intoAward',
      data: {
        id: options.id
      },
      success: function(res) {
        console.log(res)
        var data = res.data.data[0]
        var pic_data = []

        if (data.pic1 != '') {
          data.pic1 = app.globalData.url_uploads + data.pic1
          pic_data.push(data.pic1)
        }
        if (data.pic2 != '') {
          data.pic2 = app.globalData.url_uploads + data.pic2
          pic_data.push(data.pic2)
        }
        if (data.pic3 != '') {
          data.pic3 = app.globalData.url_uploads + data.pic3
          pic_data.push(data.pic3)
        }

        data.time = util.tsFormatTime(data.time * 1000, 'Y-M-D h:m:s')
        that.setData({
          pic: pic_data,
          data_lottery: data,
        })
      }
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
  onShareAppMessage: function(res) {



    // let users = wx.getStorageSync('user');

    var that = this;

    return {
      // title: '转发',
      path: '/pages/awardconfirm/awardconfirm?awardid=' + that.data.data_lottery.id,
      title: that.data.data_lottery.wechat_name+'发起了抽奖【'+that.data.data_lottery.name1 + '等你来抽】',
      imageUrl: that.data.data_lottery.pic1,

      success: function(res) {
        wx.showToast({
          title: '已转发',
        })
      }

    }


  },


  join: function() {
    var that = this;


    wx.request({
      url: app.globalData.url + 'intoLottery',
      data: {
        'userid': app.globalData.userid,
        'id': that.data.awardid
      },
      method: 'GET',
      success: function (res) {
        console.log(res)
        wx.showModal({
          title: res.data.interpret,
          content: '',
        })
      },
      fail: function (res) {
        console.log('fail')
      },
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


  lower: function(e) {
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
  },

  copy_count: function() {
    var that = this
    wx.setClipboardData({　　　　　　
      data: that.data.data_lottery.wechat_inform,
      success: function(res) {　　　　　　　　
        wx.getClipboardData({　　　　　　　　　　
          success: function(res) {　　　　　　　　　　　　
            wx.showToast({　　　　　　　　　　　　　　
              title: '复制成功'　　　　　　　　　　　　
            })　　　　　　　　　　
          }　　　　　　　　
        })　　　　　　
      }　　　　
    })
  },



  go_to_more:function(){
    wx.redirectTo({
      url: '/pages/index/index',
    })
  }

})