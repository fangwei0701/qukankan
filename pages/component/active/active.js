var active_detail = require("../../../data/data_content.js");

Page({

  data: {
    currentIndex: 0,
    details: []
  },
  // 页面加载
  onLoad: function () {
    this.setData({
      details: active_detail.active_detail_data,
    })
  },
  // 切换导航
  switchTab: function (e) {
    this.setData({
      currentIndex: e.target.dataset.index
    })
  },
  // 触动详情页
  swiperChange: function (e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },
})