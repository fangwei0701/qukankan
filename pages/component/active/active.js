var active_detail = require("../../../data/data_content.js");

Page({

  data: {
    currentIndex: 0,
    detailData: [],
    details:[]
  },
  // 页面加载
  onLoad: function () {
    var that = this;
    this.setData({
      detailData: active_detail.active_detail_data,
      details: active_detail.active_detail_data[0].detail //默认推荐的数据
    })
  },
  // 切换导航
  switchTab: function (e) {
    var that = this;
    var detailData = that.data.detailData;
    this.setData({
      currentIndex: e.target.dataset.id,
      details: detailData[e.target.dataset.id].detail,
    })
  }
})