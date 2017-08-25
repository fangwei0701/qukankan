let avtive_data = require("../../../data/active_data.js");

Page({
  data: {
    details: {},
    curIndex: 0
  },

  onLoad(e) {
    let detail = avtive_data.activeData[e.currentId].detail[e.id];
    this.setData({
      details: detail
    })
  },

  // tab切换
  switchTab(e) {
    let curIndex = this.data.curIndex;
    this.setData({
      curIndex: e.currentTarget.dataset.index
    })
  },

  // 开始报名
  getSignUp() {
    wx.showModal({
      title: '温馨提示', content: '该功能还在开发中……', confirmText: '再等等', cancelText: '那就等等',
      success: function (res) {
        if (res.confirm) { console.info("那就等等"); }
        else if (res.cancel) {
          follows[index].isFollow = false;
          that.setData({
            follows: follows
          });
        }
      }
    });
  }
})