let avtive_data = require("../../../data/active_data.js");

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
      detailData: avtive_data.activeData,
      details: avtive_data.activeData[0].detail //默认推荐的数据
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

  // 进入详情
  getActiveDetail(e) {
    const id = e.currentTarget.dataset.id;
    let currentId = this.data.currentIndex;
    wx.navigateTo({
      url: '../../detailComponent/activeDetail/activeDetail?currentId=' + currentId + '&id=' + id
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
    wx.navigateTo({
      url: './issueActive/issueActive?title=issueActive'
    })
  },

  // 点击日历
  getCalendar() {
    wx.showModal({
      title: '温馨提示', content: '可以查看日历,正在开发中…', confirmText: '等等', cancelText: '再等等',
      success: function (res) {
        if (res.confirm) { console.info("日历"); }
        else if (res.cancel) { console.info("日历"); }
      }
    });
  }
})
