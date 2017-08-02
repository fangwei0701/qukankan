var myActive_data = require("../../../data/data_content.js");

Page({

  data: {
    tabNavs: ["参与的活动", "发布的活动"],
    currentIndex: 0,
    details:[],
    myActives:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    this.setData({
      myActives: myActive_data.myActive_data,
      details: myActive_data.myActive_data[0].detail
    })
  },

  //  导航切换
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    let currentIndex = this.data.currentIndex;
    let myActives = this.data.myActives;
    let details = this.data.details;
    this.setData({
      currentIndex: index,
      details: myActives[index].detail
    })
  }

})

