Page({
  data: {
    addresss: [
      {
        'name': '万林松',
        'phone': '18984302014',
        'region': '贵州省,贵阳市,云岩区',
        'detail': '东山社区服务中心,贵阳实验三中对面,菜市场街道《配送之前先电话联系》',
        'postcode': '550000',
        'isChecked': true
      },
      {
        'name': '习近平',
        'phone': '18888888888',
        'region': '北京市,北京市,朝阳区',
        'detail': '中南海,人民大会堂,办公室888号,信息招待办公室',
        'postcode': '550000',
        'isChecked': false
      }
    ]
  },

  onLoad: function (e) {

  },

  //选择地址
  selectAddress(e) {
    const value = e.currentTarget.dataset.value;
    const index = e.currentTarget.dataset.index;
    let addresss = this.data.addresss;

    if (value == false) {   //判断只能选择一个作为默认地址
      for (let i = 0; i < addresss.length; i++) {
        addresss[i].isChecked = value;
      }
    }
    
    addresss[index].isChecked = !value;  //必须放在if之后进行是否选中切换
    this.setData({
      addresss: addresss
    })
  },

  //编辑地址
  editAddress(e) {
    wx.navigateTo({
      url: './newAddress/newAddress?title=newAddress'
    })
  },

  // 删除地址
  deleteAddress(e) {
    const index = e.currentTarget.dataset.index;
    let that = this;
    let addresss = that.data.addresss;

    wx.showModal({
      title: '确认删除该地址？', content: '', cancelText: '再考虑哈', confirmText: '忍心删除',
      success: function (res) {
        if (res.confirm) {
          addresss.splice(index, 1);
          that.setData({
            addresss: addresss
          })
        } else if (res.cancel) { }
      }
    })
  }
})