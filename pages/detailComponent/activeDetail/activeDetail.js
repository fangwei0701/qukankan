Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabnavs: [
      { name: '活动介绍', id: 'intro' },
      { name: '活动行程', id: 'route' },
      { name: '费用说明', id: 'fee' },
      { name: '更多介绍', id: 'more' }
    ],
    curIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {

  },

  switchTab(e) {
    let curIndex = this.data.curIndex;
    this.setData({
      curIndex: e.currentTarget.dataset.index
    })
  }

})