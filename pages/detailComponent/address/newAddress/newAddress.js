Page({
  data: {
    region: ['省', '市', '区'] //默认
  },

  onLoad: function (options) {

  },

  //省市区选择
  selectRegion: function (e) {
    let region = this.data.region;
    this.setData({
      region: e.detail.value
    })
  }
})