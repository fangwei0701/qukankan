let speak_detail = require("../../../data/data_content.js");

Page({
  data: {
    currentIndex: 0,
    iShowModal: false,
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
    let that = this;
    let details = this.data.details;
    let isConcerns = details[index].isConcerns;

    switch (isConcerns) {
      case true:
        wx.showModal({
          title: '确认取消关注？', content: '', confirmText: '继续关注', cancelText: '不再关注',
          success: function (res) {
            if (res.confirm) { console.info("继续关注"); }
            else if (res.cancel) {
              details[index].isConcerns = false;
              that.setData({
                details: details
              });
            }
          }
        });
        break;
      case false:
        details[index].isConcerns = true;
        that.setData({
          details: details
        });
        break;
    }
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
  },

  // 进入帖子详情 
  getSpeakDetail() {
    wx.navigateTo({
      url: '../../detailComponent/speakDetail/speakDetail?title=speakDetail'
    })
  },

  // 隐藏模态
  getHideModal(e) {
    let iShowModal = this.data.iShowModal;
    this.setData({
      iShowModal: false
    })
  },

  // 显示模态
  getShowModal(e) {
    let iShowModal = this.data.iShowModal;
    this.setData({
      iShowModal: true
    })
  },

  //  进入我的活动
  goToMyMessage(e) {
    wx.navigateTo({
      url: '../../detailComponent/myActive/myActive?title=myActive'
    })
  },

  // 发布活动
  issueSpeak() {
    wx.showModal({
      title: '温馨提示', content: '该功能模块正在开发中……',
      success: function (res) {
        if (res.confirm) { console.info("继续关注"); }
        else if (res.cancel) { }
      }
    });
  }
})
