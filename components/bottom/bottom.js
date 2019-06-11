// components/tabbar/index.js
const app =getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    one_select: {
      type: Number,
      value: 1
    },
    two_select: {
      type: Number,
      value: 2
    },
    three_select: {
      type: Number,
      value: 2
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    one_select: function() {
      console.log('1')
      // this.setData({
      //   one_select: 1,
      //   two_select: 2,
      //   three_select: 2,
      // })
      
      app.globalData.page_index=1
      this.index()
      // console.log('1', app.globalData.page_index, app.globalData.page_old_index)
    },


    two_select: function() {
      console.log('2')
      wx.navigateTo({
        url: '/pages/award/award',
      })
      // this.setData({
      //   one_select: 2,
      //   two_select: 1,
      //   three_select: 2,
      // })
      app.globalData.page_old_index = app.globalData.page_index
      app.globalData.page_index = 2
      this.index()
      // console.log('2', app.globalData.page_index, app.globalData.page_old_index)
    },


    three_select: function() {
      console.log('3')
      // this.setData({
      //   one_select: 2,
      //   two_select: 2,
      //   three_select: 1,
      // })
      app.globalData.page_index = 3
      // console.log('3', app.globalData.page_index, app.globalData.page_old_index)
      this.index()
    },
    

    index:function(){
      switch (app.globalData.page_index) {
        case 1:
          this.setData({
            one_select: 1,
            two_select: 2,
            three_select: 2,
          })
          break;
        case 2:
          this.setData({
            one_select: 2,
            two_select: 1,
            three_select: 2,
          })
          break;
        case 3:
          this.setData({
            one_select: 2,
            two_select: 2,
            three_select: 1,
          })
          break;
      }

    }

  },
  ready() {},
  pageLifetimes: {
    show: function() {
      console.log('show')
      if (app.globalData.page_index==2){
        app.globalData.page_index = app.globalData.page_old_index
      }
      console.log('ready',app.globalData.page_index, app.globalData.page_old_index)
      this.index()

    }
  }
})