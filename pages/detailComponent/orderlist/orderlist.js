Page({
  data: {
    orderList: [
      {
        'storeName': '骆驼户外官方旗舰店',
        'goodsImg': '../../../image/2_02.jpg',
        'content': '【热销7.8万双】骆驼户外登山鞋男鞋秋季牛皮防滑户外越野徒步鞋',
        'goodsNumb': '2',
        'totalPay': '285.00',
        'freight': '5.00'
      },
      {
        'storeName': '天火官方旗舰店',
        'goodsImg': '../../../image/2_04.jpg',
        'content': '天火LED强光手电筒 远射5000超亮变焦户外家用可充电迷你防水防身',
        'goodsNumb': '2',
        'totalPay': '285.00',
        'freight': '5.00'
      }
    ]
  },

  onLoad: function (options) {

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