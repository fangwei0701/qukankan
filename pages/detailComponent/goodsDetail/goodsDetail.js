Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabnavs: ["基本信息", "商品详情", "顾客点评"],
    imgUrls: [
      '../../../image/goodsImg/3_01.jpg',
      '../../../image/goodsImg/3_02.jpg',
      '../../../image/goodsImg/3_03.jpg',
      '../../../image/goodsImg/3_04.jpg',
      '../../../image/goodsImg/3_05.jpg'
    ],
    currentIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  //  导航切换
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    let currentIndex = this.data.currentIndex;
    this.setData({
      currentIndex: index
    })
  },

  // 进入购物车
  getShopCart() {
    wx.redirectTo({
      url: '../shopCart/shopCart?title=shopCart'
    })
  }
})