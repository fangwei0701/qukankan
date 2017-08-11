Page({
  data: {
    isReply: false, //默认不显示回复框
    isChecked: false,  //默认不选中
    textValue: ''
  },

  onLoad() {

  },

  // 点击回复
  getReply() {
    let isReply = this.data.isReply;
    isReply = !isReply;
    this.setData({
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