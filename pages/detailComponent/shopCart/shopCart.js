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
    let iSelect = shopCarts[id].content[index].iSelect;

    shopCarts[id].content[index].iSelect = !iSelect;

    this.setData({
      shopCarts: shopCarts
    })

    this.geTotalMoney();
    this.geTotalNumber();
  },

  // 全选按钮状态
  selectAll(e) {
    let iSelectAll = this.data.iSelectAll;
    let shopCarts = this.data.shopCarts;

    iSelectAll = !iSelectAll;

    for (let i = 0; i < shopCarts.length; i++) {
      for (let j = 0; j < shopCarts[i].content.length; j++) {
        shopCarts[i].content[j].iSelect = iSelectAll;
      }
    }

    this.setData({
      iSelectAll: iSelectAll,
      shopCarts: shopCarts
    });

    this.geTotalMoney();
    this.geTotalNumber();
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
    this.geTotalNumber();
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
    this.geTotalNumber();
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
      });
      this.geTotalMoney();
      this.geTotalNumber();
    }

    if (!shopCarts.length) {                               //删除整个购物车列表
      hasShopCartList = false;
      this.setData({
        shopCarts: shopCarts,
        hasShopCartList: hasShopCartList
      });
      this.geTotalMoney();
      this.geTotalNumber();
    }

    this.geTotalMoney();
    this.geTotalNumber();
  },

  // 计算总金额
  geTotalMoney(e) {
    let shopCarts = this.data.shopCarts;
    let totalMoney = this.data.totalMoney;
    let totals = 0;

    for (let i = 0; i < shopCarts.length; i++) {
      for (let j = 0; j < shopCarts[i].content.length; j++) {
        if (!!shopCarts[i].content[j].iSelect) {
          totals += shopCarts[i].content[j].number * shopCarts[i].content[j].pice
        }
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
        if (!!shopCarts[i].content[j].iSelect) {
          totals += shopCarts[i].content[j].number
        }
      }
    }

    this.setData({
      shopCarts: shopCarts,
      totalNumber: totals
    })
  }
})