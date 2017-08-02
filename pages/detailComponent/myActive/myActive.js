var myActive_data = require("../../../data/data_content.js");

Page({

  data: {
    tabNavs: ["参与的活动", "发布的活动"],
    currentIndex: 0,
    myActives:[]
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
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex: index
    })
  }

})

