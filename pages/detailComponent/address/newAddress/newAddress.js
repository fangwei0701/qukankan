var address_data = require("../../../../data/address_data.js");

Page({
  data: {
    region: ['省', '市', '区'], //默认
    editData: {}
  },

  onLoad(e) {

    if (!!e.id) {  // 编辑调整到地址新增
      this.setData({
        editData: address_data.addressData[e.id],
        region: address_data.addressData[e.id].region
      })
    }
  },

  //省市区选择
  selectRegion(e) {
    let region = this.data.region;
    this.setData({
      region: e.detail.value
    })
  }
})