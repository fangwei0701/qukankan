Page({

  data: {
    avatarUrl: '',
    nickName: ''
  },

  onLoad: function () {
    let that = this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl
        })
      }
    })

  },

  onReady: function () {

  },

  //进入关注
  getFollows(){
    wx.navigateTo({
      url: '../../detailComponent/follows/follows?title=follows'
    })
  },

  //进入粉丝
  getFans() {
    wx.navigateTo({
      url: '../../detailComponent/fans/fans?title=fans'
    })
  }
})