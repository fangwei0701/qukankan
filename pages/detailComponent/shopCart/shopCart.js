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

  // 当前选中商品
  selectShop(e) {
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    let shopCarts = this.data.shopCarts;
    let iSelectAll = this.data.iSelectAll;
    let iSelect = shopCarts[id].content[index].iSelect;

    shopCarts[id].content[index].iSelect = !iSelect;

    for (let i = 0; i < shopCarts[id].content.length; i++) {
      switch (shopCarts[id].content[i].iSelect) {
        case true:
          shopCarts[id].iShopSelect = true;
          break;
        default:
          shopCarts[id].iShopSelect = false;
          break;
      }
    }

    this.setData({
      shopCarts: shopCarts
    })
  },

  // 店铺全选状态
  shopSelectAll(e) {
    const index = e.currentTarget.dataset.index;
    let shopCarts = this.data.shopCarts;
    let iSelectAll = this.data.iSelectAll;
    const iShopSelect = shopCarts[index].iShopSelect;

<<<<<<< HEAD
    shopCarts[index].iShopSelect = !iShopSelect;

    for (let j = 0; j < shopCarts.length; j++) {                    //全选按钮状态切换
      iSelectAll = shopCarts[j].iShopSelect;
=======
    shopCarts[id].content[index].iSelect = !iSelect;
    // 当所有元素都有true时，iShopSelect才为true;全部为false时，iShopSelect才为false
    for (let i = 0; i < shopCarts[id].content.length; i++) {
      if (!!shopCarts[id].content[i].iSelect) {
        shopCarts[id].iShopSelect = true;
      } else {
        shopCarts[id].iShopSelect = false;
      }
>>>>>>> caa2701ccfc25147d1c732ba7f86efb8cc79fbb2
    }

    for (let i = 0; i < shopCarts[index].content.length; i++) {     //商品选中状态切换
      shopCarts[index].content[i].iSelect = shopCarts[index].iShopSelect;
    }

    this.setData({
      iSelectAll: iSelectAll,
      shopCarts: shopCarts
    })
  },

  // 全选按钮状态
  selectAll(e) {
    let iSelectAll = this.data.iSelectAll;
    let shopCarts = this.data.shopCarts;

    iSelectAll = !iSelectAll;

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

  // 删除某个商品
  deleteShop(e) {

  },

  // 计算总金额
  geTotalMoney(e) {

  },

  // 计算总数量
  geTotalNumber(e) {

  }

})