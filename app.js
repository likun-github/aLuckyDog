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
    iurl:'http://1397608894-qq.vicp.io:42685/uploads/',
    url: 'http://1397608894-qq.vicp.io:42685/lottery/',
    url_uploads: 'http://1397608894-qq.vicp.io:42685/uploads/',
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