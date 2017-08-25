var address_data = require("../../../data/address_data.js");

Page({
  data: {
    addresss: []
  },

  onLoad(e) {
    this.setData({
      addresss: address_data.addressData
    })
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
    const id = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: './newAddress/newAddress?id='+id
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