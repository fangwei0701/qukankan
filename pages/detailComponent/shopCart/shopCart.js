var cart_data = require("../../../data/data_content.js");

Page({
  data: {
    hasShopCartList: true,
    isEdit: false,
    iSelectAll: false,
    totalMoney: '0.00',
    totalNumber: 0,
    shopCarts: [] //购物车所有的商品数组
  },

  onLoad: function (e) {
    this.setData({
      shopCarts: cart_data.shopCart_data,
    })
  },

  // 选中当前商品
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

  // 全选按钮
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

  // 商品的数量
  getGoodsNumb(e) {
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    const type = e.currentTarget.dataset.type;
    let shopCarts = this.data.shopCarts;
    let numb = shopCarts[id].content[index].number;

    switch (type) {
      case "add":
        numb = parseInt(numb) + 1;                                //两步必须分开写
        shopCarts[id].content[index].number = numb;
        break;
      case "reduce":
        numb = parseInt(numb) - 1;                                //默认至少一件商品
        numb < 1 ? shopCarts[id].content[index].number = 1 : shopCarts[id].content[index].number = numb;
        break;
    }
    this.setData({
      shopCarts: shopCarts
    })

    this.geTotalMoney();
    this.geTotalNumber();
  },

  // 显示编辑
  showEdit(e) {
    this.setData({
      isEdit: true
    })
  },

  // 退出编辑
  hideEdit(e) {
    this.setData({
      isEdit: false
    })
  },

  // 删除商品
  deleteShop(e) {
    let that = this;
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    let shopCarts = this.data.shopCarts;
    let hasShopCartList = this.data.hasShopCartList;

    wx.showModal({
      title: '忍心删除么？', content: '', confirmText: '残忍删除', cancelText: '不忍心',
      success: function (res) {
        if (res.confirm) {
          shopCarts[id].content.splice(index, 1);               //删除其中某个商品
          that.setData({
            shopCarts: shopCarts
          })

          if (!shopCarts[id].content.length) {                  //删除店铺内全部商品
            shopCarts.splice(id, 1);
            that.setData({
              shopCarts: shopCarts
            });
            that.geTotalMoney();
            that.geTotalNumber();
          }
          if (!shopCarts.length) {                               //删除整个购物车列表
            that.setData({
              shopCarts: shopCarts,
              hasShopCartList: false
            });
            that.geTotalMoney();
            that.geTotalNumber();
          }

          that.geTotalMoney();
          that.geTotalNumber();
        }
      }
    })
  },

  // 计算总金额
  geTotalMoney(e) {
    let shopCarts = this.data.shopCarts;
    let totalMoney = this.data.totalMoney;
    let totals = 0;

    for (let i = 0; i < shopCarts.length; i++) {
      for (let j = 0; j < shopCarts[i].content.length; j++) {
        if (!!shopCarts[i].content[j].iSelect) {
          totals += shopCarts[i].content[j].number * shopCarts[i].content[j].pice;
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
          totals += 1;
        }
      }
    }

    this.setData({
      shopCarts: shopCarts,
      totalNumber: totals
    })
  },

  // 进入商品详情 
  getGoodsDetail() {
    wx.redirectTo({
      url: '../goodsDetail/goodsDetail?title=goodsDetail'
    })
  },

  // 确认提交订单
  getConfirmOrder() {
    let totalNumber = this.data.totalNumber;
    if (totalNumber == 0) {
      wx.showModal({
        title: '温馨提示', content: '亲,您忘记选择将要购买的商品进行结算', showCancel: false,
        success: function (res) {
          if (res.confirm) { console.log('用户点击确定') }
        }
      })
    } else {
      wx.navigateTo({
        url: '../confirmOrder/confirmOrder?title=confirmOrder'
      })
    }
  }
})