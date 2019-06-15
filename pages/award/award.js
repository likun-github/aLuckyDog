// pages/award/award.js
var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datem:'',
   image:['../../static/1.jpg'],
    z:'开奖时间',
    status: 0,
    navHeight: 0,
    showModalStatus: false,
    animationData: {},
    methord:'到达设定时间自动开奖',
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

    date3: [
      "", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, ""
    ],
    idate:0,
    ihour:0,
    imin:0,
    dindex:0,
//数据统计
    jpname:'',
    jpnum:0,
    index: 1,//开奖条件三个
    jpms:'',//奖品描述
    //index=1||index=3

    //开奖时间
    date: '',//日期
    hour: '',//小时
    min: '',//分钟
    today: '今天',//是否是今天
    
    //index=2||index=3
    kpnum:0,//开奖人数||最多抽奖人数
    
  },
  //发起抽奖
  start:function(){
    var h = util.h(new Date());
    var m = util.m(new Date());
    console.log(h,m)
    console.log(this.data.hour)
    console.log(this.data.min)
       //check
       if(this.data.jpname&&this.data.jpnum){

       if(this.data.index==1||this.data.index==3){
         
         //选择1，3时间不对
         console.log(this.data.datem);
         console.log(this.data.date);
           if(this.data.today=='今天'){
             if(this.data.hour < h || (this.data.hour == h && this.data.min < m)){
           wx.showModal({
           title: '时间信息有误',
           content: '请仔细检查开奖信息',
         })
             }
           }
       }
       //选择2 3 开奖时间不对
         if (this.data.index == 2 || this.data.index == 3) {
           if (!this.data.kpnum)
           wx.showModal({
             title: '开奖信息有误',
             content: '请仔细检查开奖信息',
           })
         }
         //这就对了
         wx.showModal({
           title: '确定开奖',
           content: '请确定这么开奖',
           success(res){
             if(res.confirm){
               wx.navigateTo({
                 url: '../joinaward/joinaward',
               })

             }
           }
         })
       }
       else wx.showModal({
         title: '信息有误',
         content: '请仔细检查所填信息',
       })
  },
  //奖品名字
  jpname:function(e){
     this.setData({
       jpname:e.detail.value
     })
  },
  jpnum: function (e) {
    this.setData({
      jpnum: e.detail.value
    })
  },
  kpnum: function (e) {
    this.setData({
      kpnum: e.detail.value
    })
  },
  jpms: function (e) {
    this.setData({
     jpms: e.detail.value
    })
  },
  select: function () {
        var that = this;
        // 鍒涘缓涓€涓ª鍔ㄧ敾瀹炰緥
         var animation = wx.createAnimation({
      // 鍔ㄧ敾鎸佺画鏃堕棿
              duration: 200,
              // 瀹氫箟鍔ㄧ敾鏁堟灉锛屽綋鍓嶆槸鍖€閫
              timingFunction: 'linear'
            })
      // 灏嗚¯ュ彉閲忚祴鍊肩粰褰撳墠鍔ㄧ敾
      that.animation = animation
        // 鍏堝湪y杞村亸绉伙紝鐒跺悗鐢╯tep()瀹屾垚涓€涓ª鍔ㄧ敾
        animation.translateY(-100).step()
        // 鐢╯etData鏀瑰彉褰撳墠鍔ㄧ敾
        that.setData({
      // 閫氳繃export()鏂规硶瀵煎嚭鏁版嵁
            animationData: animation.export(),
            select: !that.data.select
          })
     console.log(this.data.animationData)
        // 璁剧疆setTimeout鏉ユ敼鍙榶杞村亸绉婚噺锛屽疄鐜版湁鎰熻§夌殑婊戝姩
        setTimeout(function () {
            animation.translateY(0).step()
         that.setData({
 animationData: animation.export(),
                })
        }, 200)
  },
  datef: function(e) {
      var c = e.detail.current + 1;
      this.setData({
 date: this.data.date1[c],
 dindex:c
        })
    let time = util.formatTime(new Date());
    let date = util.getDates(1, time);
    var date1 = this.data.date
   date1 = date[0].time + ' ' + date[0].week
        if (this.data.date == date1) this.setData({
 today: '今天'
          })
          else this.setData({
 today: ""
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
  // 閫夋嫨棰滆壊--寮规¡ 
    showModal: function() {
    
          this.setData({
      // animationData: animation.export(),
              showModalStatus: true
            })

   },
  hideModal: function (e) {
    
      
           var index = e.currentTarget.dataset.index;
         this.setData({
index: index
           })
       var m;
     if (index == 1) {
          m='到达设定时间自动开奖';
          this.setData({z:'开奖时间'})

           }
     else if (index == 2) {
         this.setData({
 select: false
           })
       m='3天内到达设定人数自动开奖';
       
         }
     else {
         this.setData({
 select: false
           })
       m='参与者即开即中';
       this.setData({ z: '抽奖截止时间' })
         }
     this.setData({
       //  animationData: animation.export(),
         showModalStatus: false,
         methord: m
  
       })
       // }.bind(this), 200)
     },
  setNavSize: function () {
    var that = this
      , sysinfo = wx.getSystemInfoSync()
      , statusHeight = sysinfo.statusBarHeight
      , isiOS = sysinfo.system.indexOf('iOS') > -1
      , navHeight;
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
  choosepic: function () {
    var that = this;

    wx.chooseImage({
      count: 1,
      success:function(res){
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        }) 
        var tempFilePaths =res.tempFilePaths;
        console.log(tempFilePaths);
        var image = that.data.image;
        image.splice(0, 1);
        that.setData({
          image: image
        })
        that.setData({
          image: that.data.image.concat(tempFilePaths),
        });
        console.log(that.data.image)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setNavSize();
    console.log(this.data.status);
    console.log(this.data.navHeight);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
        let time = util.formatTime(new Date());
       let date = util.getDates(7, time);
        let temp_date1 = this.data.date1;
        console.log(date);
       for (var i = 0; i < 7; i++) {
           temp_date1[i + 1] = date[i].time + ' ' + date[i].week
           }
       var h = util.h(new Date());
       var m = util.m(new Date());
       this.setData({
           date1: temp_date1,
           date: temp_date1[1],
         datem: temp_date1[1],
           hour: h,
           min: m,
           ihour: h,
           imin: m - 1
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


  
})