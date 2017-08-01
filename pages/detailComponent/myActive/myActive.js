Page({

  data: {
    tabNavs: ["参与的活动", "发布的活动"],
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
  },

  //  导航切换
  switchTab(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex: index
    })
  }

})

