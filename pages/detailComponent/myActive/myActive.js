var myActive_data = require("../../../data/data_content.js");

Page({

  data: {
    currentIndex: 0,
    myActives: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    this.setData({
      myActives: myActive_data.myActive_data
    })
  },

  //  导航切换
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    let currentIndex = this.data.currentIndex;
    this.setData({
      currentIndex: index
    })
  }

})

