Page({

  data: {
    orderDetail: {
      'storeName': '骆驼户外官方旗舰店',
      'goodsImg': '../../../../image/2_02.jpg',
      'content': '【热销7.8万双】骆驼户外登山鞋男鞋秋季牛皮防滑户外越野徒步鞋',
      'goodsNumb': '2',
      'singlePice': '98.00',
      'goodsTotalPice': '196.00',
      'freight': '5.00',
      'orderPice': '201.00',
      'totalPay': '201.00',
      'orderNumb': '40280089968486797',
      'transNumb': '4004132001201707110115422290',
      'creaTime': '2017-07-28 08:22:09',
      'payTime': '2017-07-28 08:22:23',
      'closTime': '2017-07-28 08:22:30',
      'name': '万林松',
      'phone': '18984302014',
      'region': '贵州省贵阳市云岩区东山社区服务中心'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 进入商品详情 
  getGoodsDetail() {
    wx.redirectTo({
      url: '../../goodsDetail/goodsDetail?title=goodsDetail'
    })
  },

  //删除订单
  deleteOrderList(e) {
    let that = this;
    let orderDetail = that.data.orderDetail;

    wx.showModal({
      title: '确认删除该订单？', content: '', cancelText: '再考虑哈', confirmText: '忍心删除',
      success: function (res) {
        if (res.confirm) {
          orderDetail='';
          that.setData({
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