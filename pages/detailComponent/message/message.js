Page({
  data: {
    messages: [
      {
        'imgUrl': '../../../image/user_icon/user_22.jpg',
        'name': '影子',
        'comMethod': '评论',
        'myMsg': '别人逞强的时候尽量别去关心，没人管，还能撑，一被关心，就容易崩溃',
        'comContent': '左手陈醋右手盐，只有手机在眼前',
        'comTime': '2017.07.01 13:30:25',
        'reply': true
      },
      {
        'imgUrl': '../../../image/user_icon/user_20.jpg',
        'name': '星仔',
        'comMethod': '评论',
        'myMsg': '带她来一场属于我们说走就走的旅行',
        'comContent': '你仗剑走天涯，我浪且养家',
        'comTime': '2017.07.01 15:30:25',
        'reply': true
      },
      {
        'imgUrl': '../../../image/user_icon/user_21.jpg',
        'name': '矮脚虎',
        'comMethod': '评论',
        'myMsg': '再美的风景，你不上路，也只存在于别人的眼中',
        'comContent': '天不灵，地不灵，明天继续着雨淋',
        'comTime': '2017.07.01 11:30:25',
        'reply': false
      }
    ],
    isReply: false, //默认不显示回复框
    isChecked: false,  //默认不选中
    textValue: ''
  },

  onLoad() {
  },

  // 点击回复
  getReply(e) {
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

  // 获取输入的值
  getTextValue(e) {
    const value = e.detail.value;
    let textValue = this.data.textValue;
    this.setData({
      textValue: value
    })
  }
})