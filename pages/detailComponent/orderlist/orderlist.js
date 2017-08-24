let order_data = require("../../../data/order_data.js");

Page({
  data: {
    orderList: []
  },

  onLoad: function (options) {
    this.setData({
      orderList : order_data.orderData
    })
  },

  //删除订单
  deleteOrderList(e) {
    const index = e.currentTarget.dataset.index;
    let that = this;
    let orderList = that.data.orderList;

    wx.showModal({
      title: '确认删除该订单？', content: '', cancelText: '再考虑哈', confirmText: '忍心删除',
      success: function (res) {
        if (res.confirm) {
          orderList.splice(index, 1);
          that.setData({
            orderList: orderList
          })
        } else if (res.cancel) { }
      }
    })
  },

  // 评价订单
  commentOrder(e) {
    wx.showModal({
      title: '正在开发中……', content: '', cancelText: '等等', confirmText: '就等等',
      success: function (res) {
        if (res.confirm) { }
        else if (res.cancel) { }
      }
    })
  }
})