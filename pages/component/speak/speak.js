Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabNavs:["全部","关注","热门","附近"],
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  switchTab: function (e) {
    this.setData({
      currentIndex: e.target.dataset.id
    })
  }
})