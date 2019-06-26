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
    iurl:'https://xiaoyibang.top:8002/uploads/',
    url: 'https://xiaoyibang.top:8002/lottery/',
    url_uploads: 'https://xiaoyibang.top:8002/uploads/',
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