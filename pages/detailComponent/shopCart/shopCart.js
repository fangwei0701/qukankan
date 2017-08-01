var cart_data = require("../../../data/data_content.js");

Page({
  data: {
    hasShopCartList: true,
    iSelectAll: false,
    totalMoney: 0,
    totalNumber: 0,
    shopCarts: [] //购物车所有的商品数组
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

    shopCarts[index].iShopSelect = !iShopSelect;

    for (let j = 0; j < shopCarts.length; j++) {                    //全选按钮状态切换
      iSelectAll = shopCarts[j].iShopSelect;
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

    this.geTotalMoney();
  },

  // 增加商品数量
  addNumber(e) {
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    let shopCarts = this.data.shopCarts;
    let numb = shopCarts[id].content[index].number;

    numb = numb + 1;                                //两步必须分开写
    shopCarts[id].content[index].number = numb;

    this.setData({
      shopCarts: shopCarts
    })

    this.geTotalMoney();
  },

  // 减少商品数量
  decrNumber(e) {
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    let shopCarts = this.data.shopCarts;
    let numb = shopCarts[id].content[index].number;

    numb = numb - 1;                                      //默认至少一件商品
    numb < 1 ? shopCarts[id].content[index].number = 1 : shopCarts[id].content[index].number = numb;

    this.setData({
      shopCarts: shopCarts
    })

    this.geTotalMoney();
  },

  // 删除某个商品
  deleteShop(e) {
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    let shopCarts = this.data.shopCarts;
    let hasShopCartList = this.data.hasShopCartList;

    shopCarts[id].content.splice(index, 1);               //删除其中某个商品
    this.setData({
      shopCarts: shopCarts
    })

    if (!shopCarts[id].content.length) {                  //删除店铺内全部商品
      shopCarts.splice(id, 1);
      this.setData({
        shopCarts: shopCarts
      })
    }

    if (!shopCarts.length) {                               //删除整个购物车列表
      hasShopCartList = false;
      this.setData({
        hasShopCartList: hasShopCartList
      })
    }
  },

  // 计算总金额
  geTotalMoney(e) {
    let shopCarts = this.data.shopCarts;
    let totalMoney = this.data.totalMoney;
    let totals = 0;

    for (let i = 0; i < shopCarts.length; i++) {
      for (let j = 0; j < shopCarts[i].content.length; j++) {
        totals += shopCarts[i].content[j].number * shopCarts[i].content[j].pice
      }
    }

    this.setData({
      shopCarts: shopCarts,
      totalMoney: totals.toFixed(2)
    })
  },

  // 计算总数量
  geTotalNumber(e) {
    let shopCarts = this.data.shopCarts;
    let totalNumber = this.data.totalNumber;
    let totals = 0;

    for (let i = 0; i < shopCarts.length; i++) {
      for (let j = 0; j < shopCarts[i].content.length; j++) {
        totals += shopCarts[i].content[j].number
      }
    }

    this.setData({
      shopCarts: shopCarts,
      totalNumber: totals
    })
  }
})