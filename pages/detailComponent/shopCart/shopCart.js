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
    let content = shopCarts[index].content;       //店铺内的商品列表

    shopCarts[index].iShopSelect = !iShopSelect;  //选中状态进行切换

    for (let i = 0; i < content.length; i++) {    //循环店铺的商品列表
      content[i].iSelect = shopCarts[index].iShopSelect;
    }

    this.setData({
      shopCarts: shopCarts                        //更新购物车商品数组
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
      if (shopCarts[id].content[i].iSelect == true) {
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

    // selectAll(e) {
    //   let selectAllStatus = this.data.selectAllStatus;
    //   selectAllStatus = !selectAllStatus;
    //   let carts = this.data.carts;

    //   for (let i = 0; i < carts.length; i++) {
    //     carts[i].selected = selectAllStatus;
    //   }
    //   this.setData({
    //     selectAllStatus: selectAllStatus,
    //     carts: carts
    //   });
    //   this.getTotalPrice();
    // },

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