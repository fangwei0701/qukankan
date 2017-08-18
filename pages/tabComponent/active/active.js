let active_detail = require("../../../data/data_content.js");

Page({

  data: {
    currentIndex: 0,
    detailData: [],
    details: [],
    iShowModal: false
  },

  // 页面加载
  onLoad() {
    let detailData = this.data.detailData;
    let details = this.data.details;

    this.setData({
      detailData: active_detail.active_detail_data,
      details: active_detail.active_detail_data[0].detail //默认推荐的数据
    })
  },

  // 切换导航
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    let currentIndex = this.data.currentIndex;
    let detailData = this.data.detailData;
    let details = this.data.details;

    this.setData({
      currentIndex: index,
      details: detailData[index].detail,
    })
  },

  //  进入搜索
  goToSearch(e) {
    wx.navigateTo({
      url: '../../detailComponent/search/search?title=search'
    })
  },

  // 隐藏模态
  getHideModal(e) {
    let iShowModal = this.data.iShowModal;
    this.setData({
      iShowModal: false
    })
  },

  // 显示模态
  getShowModal(e) {
    let iShowModal = this.data.iShowModal;
    this.setData({
      iShowModal: true
    })
  },

  //  进入我的活动
  goToMyActive(e) {
    wx.navigateTo({
      url: '../../detailComponent/myActive/myActive?title=myActive'
    })
  },

  // 发布活动
  issueActive() {
    wx.showModal({
      title: '温馨提示', content: '该功能模块正在开发中……',
      success: function (res) {
        if (res.confirm) { console.info("继续关注"); }
        else if (res.cancel) { }
      }
    });
  }
})
