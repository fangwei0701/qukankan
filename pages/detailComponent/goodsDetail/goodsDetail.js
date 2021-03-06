Page({

  data: {
    tabnavs: ["基本信息", "商品详情", "顾客点评"],
    imgUrls: [
      '../../../image/goodsImg/3_01.jpg',
      '../../../image/goodsImg/3_02.jpg',
      '../../../image/goodsImg/3_03.jpg'
    ],
    reviews: [
      {
        'reviewName': '影子',
        'reviewTime': '2017-01-03',
        'reviewCont': '宝贝相当不错，很有质感，看上去高大上的感觉，客服服务也很好',
        'reviewProp': '黄色'
      }, {
        'reviewName': '山鸡',
        'reviewTime': '2017-07-25',
        'reviewCont': '宝贝相当不错，很有质感，看上去高大上的感觉，客服服务也很好',
        'reviewProp': '红色'
      }
    ],
    goodsIfo: {
      'goodsActive': '购买即送价值250.00元的大礼包',
      'infoImg': [
        '../../../image/goodsImg/4_10.jpg',
        '../../../image/goodsImg/4_11.jpg'
      ]
    },
    goodsProp: {
      'goodsImg': '../../../image/2_01.jpg',
      'totalNum': '320',
      'goodsColor': [
        {
          'color': '黑色',
          'iSellOut': 'false'
        }, {
          'color': '红色',
          'iSellOut': 'false'
        }, {
          'color': '军绿色',
          'iSellOut': 'false'
        }, {
          'color': '黄色',
          'iSellOut': 'true'
        }
      ],
      'goodsSize': [
        {
          'size': 'S',
          'iSellOut': 'false'
        }, {
          'size': 'M',
          'iSellOut': 'false'
        }, {
          'size': 'L',
          'iSellOut': 'false'
        }, {
          'size': 'XL',
          'iSellOut': 'true'
        }
      ],

    },
    currentIndex: 0,    //默认显示基本信息
    swiperCurrent: 0,
    isShowModal: false, //默认模态框不显示
    showModalType: '',  //判断显示模态框的人口
    selectNumb: '1',    //默认1件
    selectSize: '',
    selectColor: '',
    currentColor: '1000',
    currentSize: '1000',
  },

  onLoad(e) {
    //拉取数据
  },

  // 导航切换
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    let currentIndex = this.data.currentIndex;
    this.setData({
      currentIndex: index
    })
  },

  // 轮播图
  swiperChange(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  // 进入购物车
  getShopCart() {
    wx.redirectTo({
      url: '../shopCart/shopCart?title=shopCart'
    })
  },

  // 弹出模态框
  getShowModal(e) {
    const type = e.currentTarget.dataset.type;
    let isShowModal = this.data.isShowModal;
    let showModalType = this.data.showModalType;

    this.setData({
      showModalType: type,
      isShowModal: true
    })
  },

  // 隐藏模态框
  getHideModal() {
    let isShowModal = this.data.isShowModal;
    this.setData({
      isShowModal: false
    })
  },

  // 商品数量控制
  getGoodsNumb(e) {
    const type = e.currentTarget.dataset.type; //判断增加或者减少
    let selectNumb = this.data.selectNumb;

    switch (type) {
      case 'add':
        selectNumb = parseInt(selectNumb) + 1;
        break;
      case 'reduce':
        selectNumb = parseInt(selectNumb) - 1;
        selectNumb < 1 ? selectNumb = 1 : selectNumb = selectNumb;
        break;
    }
    this.setData({
      selectNumb: selectNumb
    })
  },

  // 选择颜色
  userSelectColor(e) {
    const color = e.currentTarget.dataset.color;
    const index = e.currentTarget.dataset.index;
    let currentColor = this.data.currentColor;
    let selectColor = this.data.selectColor;

    this.setData({
      selectColor: color,
      currentColor: index
    })
  },

  // 选择尺寸
  userSelectSize(e) {
    const index = e.currentTarget.dataset.index;
    const size = e.currentTarget.dataset.size;
    let currentSize = this.data.currentSize;
    let selectSize = this.data.selectSize;

    this.setData({
      selectSize: size,
      currentSize: index
    })
  },

  // 确认
  getConfirmOrder() {
    let showModalType = this.data.showModalType;
    let selectSize = this.data.selectSize;
    let selectColor = this.data.selectColor;

    if (selectColor == '') {
      wx.showModal({
        title: '温馨提示', content: '请选择你喜欢的颜色', showCancel: false,
        success: function (res) {
          if (res.confirm) { console.log('用户点击确定') }
        }
      })
    } else if (selectSize == '') {
      wx.showModal({
        title: '温馨提示', content: '请选择适合您的尺码', showCancel: false,
        success: function (res) {
          if (res.confirm) { console.log('用户点击确定') }
        }
      })
    } else {
      switch (showModalType) {
        case "joinCart":
          wx.redirectTo({
            url: '../shopCart/shopCart?title=shopCart'
          })
          break;
        case "buyNow":
          wx.navigateTo({
            url: '../confirmOrder/confirmOrder?title=confirmOrder'
          })
          break;
      }
      this.getHideModal();    //隐藏模态框
    }
  }
})