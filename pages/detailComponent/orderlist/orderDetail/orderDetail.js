let orderlist_data = require("../../../../data/order_data.js");

Page({

  data: {
    orderDetail: {},
  },

  onLoad(e) {
    this.setData({
      orderDetail: orderlist_data.orderData[e.id]
    })
  },

  // 进入商品详情 
  getGoodsDetail() {
    wx.redirectTo({
      url: '../../goodsDetail/goodsDetail?title=goodsDetail'
    })
  },

  //删除订单
  deleteOrderList(e) {
    let _this = this;
    let id = e.currentTarget.dataset.id;
    let orderDetail = _this.data.orderDetail;

    wx.showModal({
      title: '确认删除该订单？', content: '', cancelText: '再考虑哈', confirmText: '忍心删除',
      success: function (res) {
        if (res.confirm) {
          orderDetail = '';
          _this.setData({
            orderDetail: orderDetail
          })
          wx.navigateBack(); //删除之后返回上一界面
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