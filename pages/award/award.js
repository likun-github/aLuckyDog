// pages/award/award.js
var util=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    navHeight: 0,
    tempFilePaths: '',
    item: '../../static/1.jpg',
    showModalStatus: false,
    animationData: {},
    methord:'到达设定时间自动开奖',
    index:1,
    date:'',
    hour:'',  
    min:'', 
    today:'今天',
    select:false,
    animationData: {},
    date1:[
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    date2: [

      "",
0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,
      ""
    ],
    date3:[
      "","01","02","03","04","05","06","07","08","09","10",11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,""
    ],
    idate:0,
    ihour:0,
    imin:0,
  },
  select:function(){
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 200,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(-100).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      select: !that.data.select
    })
     console.log(this.data.animationData)
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
      })
    }, 200)
  },
  datef:function(e){
    var c = e.detail.current+1;
    this.setData({
      date:this.data.date1[c]
    })
    let time = util.formatTime(new Date());
    let date = util.getDates(1, time);
    var date1=this.data.date
    date1 = date[0].time + ' ' + date[0].week
    if (this.data.date==date1)this.setData({
      today:'今天'
    })
    else this.setData({
      today:""
    })
  },
  hourf: function (e) {
    var c = e.detail.current + 1;
    this.setData({
      hour: this.data.date2[c]
    })
  },
  minf: function (e) {
    var c = e.detail.current + 1;
    this.setData({
      min: this.data.date3[c]
    })
  },
  // 选择颜色--弹框 
  showModal: function() {

    this.setData({
      // animationData: animation.export(),
      showModalStatus: true
    })

  },
  // 隐藏弹框  
  hideModal: function(e) {

       
    var index=e.currentTarget.dataset.index;
    this.setData({
      index:index
    })
    var m;
    if(index==1){
       m='到达指定时间自动开奖'
      }
    else if(index==2){
      this.setData({
        select:false
      })
      m='3天内到达设定人数自动开奖'
      }
    else {
      this.setData({
        select: false
      })
      m='参与者即开即中'
      }
    this.setData({
      //  animationData: animation.export(),
      showModalStatus: false,
      methord:m

    })
    // }.bind(this), 200)
  },

  setNavSize: function() {
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
    console.log(that.data.status, that.data.navHeight)
  },
  choosepic: function() {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths, res);
        that.setData({
          item: that.data.images.concat(tempFilePaths),
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setNavSize();
    console.log(this.data.status);
    console.log(this.data.navHeight);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let time = util.formatTime(new Date());
    let date = util.getDates(7, time);
    let temp_date1 = this.data.date1;
    console.log(date);
    for (var i = 0; i < 7; i++) {
      temp_date1[i+1] = date[i].time+' '+date[i].week
    }
    var h=util.h(new Date());
    var m=util.m(new Date());
    this.setData({
      date1: temp_date1,
      date:temp_date1[1],
      hour:h,
      min:m,
      ihour:h,
      imin:m-1
    })
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
  onShareAppMessage: function() {

  }
})