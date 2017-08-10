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
    isShowModal: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //  导航切换
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    let currentIndex = this.data.currentIndex;
    this.setData({
      currentIndex: index
    })
  },

  //  弹出模态框
  getShowModal() {
    let isShowModal = this.data.isShowModal;
    isShowModal = true;
    this.setData({
      isShowModal: isShowModal
    })
  },

  //  隐藏模态框
  getHideModal() {
    let isShowModal = this.data.isShowModal;
    isShowModal = false;
    this.setData({
      isShowModal: isShowModal
    })
  },

  // 进入购物车
  getShopCart() {
    wx.redirectTo({
      url: '../shopCart/shopCart?title=shopCart'
    })
  },

  //  结算进入确认订单
  getConfirmOrder() {
    let isShowModal = this.data.isShowModal;
    isShowModal = false;

    wx.navigateTo({
      url: '../confirmOrder/confirmOrder?title=confirmOrder'
    })

    this.setData({
      isShowModal: isShowModal
    })
  }
})