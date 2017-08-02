let active_detail = require("../../../data/data_content.js");

Page({

  data: {
    currentIndex: 0,
    detailData: [],
    details: []
  },

  // 页面加载
  onLoad() {
    let detailData = this.data.detailData;
    let details = this.data.details;

    this.setData({
      detailData: active_detail.active_detail_data,
      details: active_detail.active_detail_data[0].detail //默认推荐的数据
    })
  },

  // 切换导航
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    let currentIndex = this.data.currentIndex;
    let detailData = this.data.detailData;
    let details = this.data.details;

    this.setData({
      currentIndex: index,
      details: detailData[index].detail,
    })
  }
})
