// components/tabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    one_select: {
      type: Number,
      value: 2
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
      this.setData({
        one_select: 1,
        two_select: 2,
        three_select: 2,
      })

    },
    two_select: function() {
      console.log('2')
      wx.navigateTo({
        url: '/pages/award/award',
      })
      this.setData({
        one_select: 2,
        two_select: 1,
        three_select: 2,
      })
    },
    three_select: function() {
      console.log('3')
      this.setData({
        one_select: 2,
        two_select: 2,
        three_select: 1,
      })


    },


  },
  ready() {},
  pageLifetimes: {
    show: function() {
      console.log('show')

    }
  }
})