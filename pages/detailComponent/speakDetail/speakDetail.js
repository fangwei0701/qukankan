Page({

  data: {
    speakDetails: {
      'authorImg': '../../../image/user_icon/user_23.jpg',
      'authorName': '影子',
      'issueTime': '2017-02-03',
      'issueCont': '读大学的时候，寝室对面恰好就是小吃街，饭店紧挨着饭店，想改善伙食了，就下楼，穿横道，撒丫子跑过去，有时运气好，刚要过横道，正赶上绿灯，大喜，一路绝尘，想也不想就跳进了人的河里。',
      'comment': [
        {
          'commentImg': '../../../image/user_icon/user_17.jpg',
          'commentNmae': '煞科',
          'commentCont': '再美的风景,你不上路,也只存在于别人眼中',
          'floorNum': '1',
          'floorTime': '20分钟前',
          'likeNum': '20',
          'isLike': true
        },
        {
          'commentImg': '../../../image/user_icon/user_15.jpg',
          'commentNmae': '美国队长',
          'commentCont': '知之为知之,不知为不知',
          'floorNum': '2',
          'floorTime': '10分钟前',
          'likeNum': '5',
          'isLike': false
        }
      ]
    },
    floorTotalNum: 0,
    isReply: false, //默认不显示回复框
    isChecked: false,  //默认不选中
    textValue: ''
  },

  // 页面加载(楼层计算)
  onLoad(e) {
    let speakDetails = this.data.speakDetails;
    this.setData({
      floorTotalNum: speakDetails.comment.length
    })
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

  // 失去焦点获取输入的值
  getTextValue(e) {
    const value = e.detail.value;
    let textValue = this.data.textValue;
    this.setData({
      textValue: value
    })
  }
})