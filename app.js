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
    url: 'http://1397608894-qq.vicp.io:42685/lottery/',
    userInfo: null,
    top_height:0,
 
    userid: '',
    nickname: '',
    avatarUrl: '',
    status:'',

    height: '',

    country: '',
    city: '',
    province: '',
    language: "zh_CN",
   
  }
})