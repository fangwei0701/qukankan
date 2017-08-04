Page({

  data: {

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
  }
})