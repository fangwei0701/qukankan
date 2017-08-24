let speak_data = require("../../../data/speak_data.js");

Page({
  data: {
    speakDetails: {},
    isReply: false, //默认不显示回复框
    isChecked: false,  //默认不选中
    textValue: '',
    replyName: ''
  },

  // 页面加载(楼层计算)
  onLoad(e) {
    let speakDetails = speak_data.speakData[e.currentId].detail[e.id];
    this.setData({
      speakDetails: speakDetails,
    })
  },

  // 点击关注
  getFollow(e) {
    let that = this;
    let speakDetails = this.data.speakDetails;

    switch (speakDetails.isFollow) {
      case true:
        wx.showModal({
          title: '确认取消关注？', content: '', confirmText: '继续关注', cancelText: '不再关注',
          success: function (res) {
            if (res.confirm) { }
            else if (res.cancel) {
              speakDetails.isFollow = false;
              that.setData({
                speakDetails: speakDetails
              });
            }
          }
        });
        break;
      case false:
        speakDetails.isFollow = true;
        that.setData({
          speakDetails: speakDetails
        });
        break;
    }
  },

  // 点击喜欢
  switchLike(e) {
    const index = e.currentTarget.dataset.index;
    let speakDetails = this.data.speakDetails;
    let isLike = speakDetails.comment[index].isLike;
    let likeNum = speakDetails.comment[index].likeNum;

    speakDetails.comment[index].isLike = !isLike;

    switch (speakDetails.comment[index].isLike) {
      case true:
        likeNum++;
        speakDetails.comment[index].likeNum = likeNum;
        break;
      case false:
        likeNum--;
        speakDetails.comment[index].likeNum = likeNum;
        break;
    }
    this.setData({
      speakDetails: speakDetails
    })
  },

  // 点击回复
  getReply(e) {
    let replyname = e.currentTarget.dataset.replyname;
    let isReply = this.data.isReply;
    let replyName = this.data.replyName;

    isReply = !isReply;
    
    this.setData({
      replyName: replyname,
      isReply: isReply
    })
  },

  //点击提交评论
  submitReply() {
    let isReply = this.data.isReply;
    let textValue = this.data.textValue;
    if (textValue == '') {
      wx.showModal({
        title: '温馨提示', content: '请输入您的回复内容', showCancel: false,
        success: function (res) {
          if (res.confirm) { console.log('用户点击确定') }
        }
      })
    } else {
      isReply = !isReply;
      this.setData({
        isReply: isReply
      })
    }
  },

  //点击取消
  cancelReply() {
    let isReply = this.data.isReply;
    isReply = !isReply;
    this.setData({
      isReply: isReply
    })
  },

  //单选框的切换
  radioSwitch(e) {
    let isChecked = this.data.isChecked;
    isChecked = !isChecked;
    this.setData({
      isChecked: isChecked
    })
  },

  // 失去焦点获取输入的值
  getTextValue(e) {
    const value = e.detail.value;
    let textValue = this.data.textValue;
    this.setData({
      textValue: value
    })
  }
})