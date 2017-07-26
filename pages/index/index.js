var index_data = require("../../data/data_content.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../image/swiper/01.jpg',
      '../../image/swiper/02.jpg',
      '../../image/swiper/03.jpg',
      '../../image/swiper/04.jpg',
      '../../image/swiper/05.jpg',
      '../../image/swiper/06.jpg',
      '../../image/swiper/07.jpg'
    ],
    swiperCurrent: 0,
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  onLoad: function () {
    this.setData({
      books: index_data.book_data,
      actives: index_data.active_data,
      equips: index_data.equip_data
    })
  }
})