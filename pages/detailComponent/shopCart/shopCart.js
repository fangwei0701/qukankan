var cart_data = require("../../../data/data_content.js");

Page({
  data: {
    iSelectAll: false,
    totalMoney: 0,
    totalNumber: 0,
    shopCarts: [], //购物车所有的商品数组
    is: true
  },

  onLoad: function (e) {
    this.setData({
      shopCarts: cart_data.shopCart_data,
    })
  },

  // 店铺商品的全选
  shopSelectAll(e) {
    const index = e.currentTarget.dataset.index;
    let shopCarts = this.data.shopCarts;
    const iShopSelect = shopCarts[index].iShopSelect;

    shopCarts[index].iShopSelect = !iShopSelect;

    for (let i = 0; i < shopCarts[index].content.length; i++) {    //店铺内商品的循环
      shopCarts[index].content[i].iSelect = shopCarts[index].iShopSelect;
    }

    this.setData({
      shopCarts: shopCarts
    })
  },

  // 当前选中商品
  selectShop(e) {
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    let shopCarts = this.data.shopCarts;
    const iSelect = shopCarts[id].content[index].iSelect;

    shopCarts[id].content[index].iSelect = !iSelect;
    // 当所有元素都有true时，iShopSelect才为true;全部为false时，iShopSelect才为false
    for (let i = 0; i < shopCarts[id].content.length; i++) {
      if (!!shopCarts[id].content[i].iSelect) {
        shopCarts[id].iShopSelect = true;
      } else {
        shopCarts[id].iShopSelect = false;
      }
    }
    this.setData({
      shopCarts: shopCarts
    })
  },

  // 全选商品
  selectAll(e) {
    let iSelectAll = this.data.iSelectAll;
    iSelectAll = !iSelectAll;
    let shopCarts = this.data.shopCarts;

    for (let i = 0; i < shopCarts.length; i++) {
      shopCarts[i].iShopSelect = iSelectAll;
      for (let j = 0; j < shopCarts[i].content.length; j++) {
        shopCarts[i].content[j].iSelect = iSelectAll
      }
    }
    this.setData({
      iSelectAll: iSelectAll,
      shopCarts: shopCarts
    });
  },

  // 增加商品数量
  addNumber(e) {

  },

  // 减少商品数量
  decrNumber(e) {

  },

  // 删除商品
  deleteShop(e) {

  },

  // 计算总金额
  geTotalMoney(e) {

  },

  // 计算总数量
  geTotalNumber(e) {

  }

})