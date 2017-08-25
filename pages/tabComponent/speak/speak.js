let speak_data = require("../../../data/speak_data.js");

Page({
  data: {
    currentIndex: 0,
    iShowModal: false,
    speakDetail: [],
    details: []
  },

  // 页面加载
  onLoad() {
    this.setData({
      speakDetail: speak_data.speakData,
      details: speak_data.speakData[0].detail //默认全部的数据
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
    let isFollow = details[index].isFollow;

    switch (isFollow) {
      case true:
        wx.showModal({
          title: '确认取消关注？', content: '', confirmText: '继续关注', cancelText: '不再关注',
          success: function (res) {
            if (res.confirm) { console.info("继续关注"); }
            else if (res.cancel) {
              details[index].isFollow = false;
              that.setData({
                details: details
              });
            }
          }
        });
        break;
      case false:
        wx.showToast({
          title: '关注成功',icon: 'success',duration: 1000,
          success:function(){
            details[index].isFollow = true;
            that.setData({
              details: details
            });
          }
        })
        break;
    }
  },

  // 点击喜欢
  enjoy(e) {
    const index = e.currentTarget.dataset.index;
    let details = this.data.details;
    let isEnjoy = details[index].isEnjoy;
    let numb = details[index].enjoyNum;

    details[index].isEnjoy = !isEnjoy;
    switch (details[index].isEnjoy) {     //显示数量
      case true:
        numb++;
        details[index].enjoyNum = numb;
        break;
      case false:
        numb--;
        details[index].enjoyNum = numb;
        break;
    }

    this.setData({
      details: details
    })
  },

  // 进入帖子详情 
  getSpeakDetail(e) {
    const id = e.currentTarget.dataset.id;
    let currentId = this.data.currentIndex;
    wx.navigateTo({
      url: '../../detailComponent/speakDetail/speakDetail?currentId=' + currentId + '&id=' + id
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

  //  进入我的消息
  goToMyMessage(e) {
    wx.navigateTo({
      url: '../../detailComponent/message/message?title=message'
    })
  },

  // 发布活动
  issueSpeak() {
    wx.navigateTo({
      url: './issueSpeak/issueSpeak?title=issueSpeak'
    })
  }
})
