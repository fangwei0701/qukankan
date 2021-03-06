var index_data = require("../../data/data_content.js");

Page({
  data: {
    imgUrls: [
      '../../image/swiper/01.jpg',
      '../../image/swiper/02.jpg',
      '../../image/swiper/03.jpg'
    ],
    books: [
      {
        "title": "贴士", "imgUrl": "../../image/icon/tieshi.png"
      },
      {
        "title": "天气", "imgUrl": "../../image/icon/tianqi.png"
      },
      {
        "title": "日历", "imgUrl": "../../image/icon/calendar.png"
      },
      {
        "title": "更多", "imgUrl": "../../image/icon/more.png"
      }
    ],
    swiperCurrent: 0
  },

  onLoad() {
    this.setData({
      actives: index_data.active_data,
      equips: index_data.equip_data
    })
  },

  // 轮播图
  swiperChange(e) {
    console.info(e);
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  // 进入活动详情
  getActiveDetail(e){
    let id = e.currentTarget.dataset.id;
    let currentId = e.currentTarget.dataset.currentid;
    wx.navigateTo({
      url: '../detailComponent/activeDetail/activeDetail?currentId=' + currentId + '&id=' + id
    })
  },

  // 进入商品详情 
  getGoodsDetail() {
    wx.navigateTo({
      url: '../detailComponent/goodsDetail/goodsDetail?title=goodsDetail'
    })
  }
})