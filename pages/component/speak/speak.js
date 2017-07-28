var speak_detail = require("../../../data/data_content.js");

Page({

  data: {
    concerns: '../../../../image/icon/concerns.png',
    currentIndex: 0,
    speakDetail: [],
    details: [],
    isConcerns:false
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
    var is = this.data.isConcerns;
    if (!is){
      this.setData({
        isConcerns:true,
        concerns: '../../../../image/icon/concerns_active.png'
      })
    }else{
      this.setData({
        isConcerns: false,
        concerns: '../../../../image/icon/concerns.png'
      })
    }
  
  },
})