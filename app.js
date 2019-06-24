//app.js
App({
  onLaunch: function () {
   var that=this;
   var information=wx.getStorageSync('information');
    if(information){
      this.globalData.userid=information.userid;
      this.globalData.nickname=information.nickname;
      this.globalData.avatarUrl=information.avatarUrl;
      this.globalData.status=information.status;
    }
  },

  globalData: {
    url: 'http://25t2f65842.wicp.vip:19785/lottery/',
    userInfo: null,
    top_height:0,
 
    userid: '',
    nickname: '',
    avatarUrl: '',
    status:'',
    gender:'',

    height: '',

    country: '',
    city: '',
    province: '',
    language: "zh_CN",
    awardprofile:'请输入本次抽奖活动的说明',
    awardprofile1:'',
    awardprofile2: ''
  }
})