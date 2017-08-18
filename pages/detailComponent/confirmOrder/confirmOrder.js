Page({
  data: {
    addressData: {
      'name': '万林松',
      'phone': '18984302015',
      'region': '贵州省,贵阳市,云岩区',
      'detail': '东山社区服务中心,贵阳实验三中对面,菜市场街道《配送之前先电话联系》',
      'postcode': '550000',
      'isChecked': true
    },
    confirmData: {
      'storeName': '骆驼户外官方旗舰店',
      'goodsName': '【热销7.8万双】骆驼户外登山鞋男鞋秋季牛皮防滑户外越野徒步鞋',
      'goodsPice': '120.00',
      'goodsNumb': '2',
      'postage': '20.00'
    },
    totalPice: ''
  },

  onLoad: function (e) {
    this.getTotalPice(); //计算总金额
  },

  // 商品的数量
  getGoodsNumb(e) {
    const type = e.currentTarget.dataset.type;
    let confirmData = this.data.confirmData;
    let goodsNumb = confirmData.goodsNumb;

    switch (type) {
      case "add":
        goodsNumb = parseInt(goodsNumb) + 1;                                //两步必须分开写
        confirmData.goodsNumb = goodsNumb;
        break;
      case "reduce":
        goodsNumb = parseInt(goodsNumb) - 1;                                //默认至少一件商品
        goodsNumb < 1 ? confirmData.goodsNumb = 1 : confirmData.goodsNumb = goodsNumb;
        break;
    }
    this.setData({
      confirmData: confirmData
    })

    this.getTotalPice();
  },

  // 总金额
  getTotalPice(e) {
    let confirmData = this.data.confirmData;
    let totalPice = this.data.totalPice;
    totalPice = parseInt(confirmData.goodsPice) * parseInt(confirmData.goodsNumb) + parseInt(confirmData.postage);

    this.setData({
      totalPice: totalPice.toFixed(2)
    })
  },

  //选择地址
  getSelectAddress() {
    wx.navigateTo({
      url: '../address/address?title=address'
    })
  },

  // 提交订单
  submitOrder(e) {
    wx.showModal({
      title: '温馨提示', content: '该功能正在紧张而有序的开发中…', showCancel: false,
      success: function (res) {
        if (res.confirm) { console.log('用户点击确定') }
      }
    })
  }
})