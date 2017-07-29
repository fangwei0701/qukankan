var speak_detail = require("../../../data/data_content.js");

Page({

  data: {
    concerns: '../../../../image/icon/concerns.png',
    enjoyIcon: '../../../../image/icon/enjoy.png',
    currentIndex: 0,
    speakDetail: [],
    details: [],
    isToggle: false
  },

  // 页面加载
  onLoad: function () {
    this.setData({
      speakDetail: speak_detail.speak_data,
      details: speak_detail.speak_data[0].detail //默认全部的数据
    })
  },

  // 导航切换
  switchTab: function (e) {
    let speakDetail = this.data.speakDetail;
    this.setData({
      currentIndex: e.target.dataset.id,
      details: speakDetail[e.target.dataset.id].detail,
    })
  },

  // 点击关注
  concerns: function (e) {
    var is = this.data.isToggle;
    if (!is) {
      this.setData({
        isToggle: true,
        concerns: '../../../../image/icon/concerns_active.png'
      })
    } else {
      this.setData({
        isToggle: false,
        concerns: '../../../../image/icon/concerns.png'
      })
    }
  },

  // 点击喜欢
  enjoy: function (e) {
    var is = this.data.isToggle;
    if (!is) {
      this.setData({
        isToggle: true,
        enjoyIcon: '../../../../image/icon/enjoy_active.png'
      })
    } else {
      this.setData({
        isToggle: false,
        enjoyIcon: '../../../../image/icon/enjoy.png'
      })
    }

  },
})