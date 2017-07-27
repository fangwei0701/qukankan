var speak_detail = require("../../../data/data_content.js");

Page({

  data: {
    currentIndex: 0,
    speakDetail: [],
    details: []
  },

  onLoad: function () {
    this.setData({
      speakDetail: speak_detail.speak_data,
      details: speak_detail.speak_data[0].detail //默认全部的数据
    })
  },

  switchTab: function (e) {
    var that = this;
    var speakDetail = that.data.speakDetail;
    this.setData({
      currentIndex: e.target.dataset.id,
      details: speakDetail[e.target.dataset.id].detail,
    })
  }
})