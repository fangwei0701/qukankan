let speak_detail = require("../../../data/data_content.js");

Page({

  data: {
    currentIndex: 0,
    speakDetail: [],
    details: []
  },

  // 页面加载
  onLoad() {
    let speakDetail = this.data.speakDetail;
    let details = this.data.details;

    this.setData({
      speakDetail: speak_detail.speak_data,
      details: speak_detail.speak_data[0].detail //默认全部的数据
    })
  },

  // 导航切换
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    let currentIndex = this.data.currentIndex;
    let speakDetail = this.data.speakDetail;
    let details = this.data.details;

    this.setData({
      currentIndex: index,
      details: speakDetail[index].detail
    })
  },

  // 点击关注
  concerns(e) {
    const index = e.currentTarget.dataset.index;
    let details = this.data.details;
    let isConcerns = details[index].isConcerns;

    details[index].isConcerns = !isConcerns;

    this.setData({
      details: details
    })
  },

  // 点击喜欢
  enjoy(e) {
    const index = e.currentTarget.dataset.index;
    let details = this.data.details;
    let isEnjoy = details[index].isEnjoy;
    let numb = details[index].enjoy;

    details[index].isEnjoy = !isEnjoy;

    switch (details[index].isEnjoy) {     //显示数量
      case true:
        numb++;
        details[index].enjoy = numb;
        break;
      case false:
        numb--;
        details[index].enjoy = numb;
        break;
    }

    this.setData({
      details: details
    })
  }
})
