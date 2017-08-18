Page({
  data: {
    isShowInit: false,
    isSearchHot: false,
    hotSearch: {
      'title': '热门搜索',
      'list': ['徒步', '西藏', '青海湖骑行', '摄影', '武功山露营']
    },
    hisSearch: {
      'title': '历史搜索',
      'list': ['徒步', '西藏', '青海湖骑行', '摄影', '露营']
    }
  },

  onLoad(e) { },

  // 点击清空
  getClear() {
    let hisSearch = this.data.hisSearch;
    let isSearchHot = this.data.isSearchHot;
    hisSearch.list = [];    //清除历史记录的内容

    this.setData({
      isSearchHot: isSearchHot,
      isSearchHot: true
    })
  },

  // 输入搜索内容
  getSearchValue(e) {
    const value = e.detail.value;
    let isShowInit = this.data.isShowInit;

    if (!!value.replace(/(^\s*)|(\s*$)/g, "")) { //去除两端的空格
      isShowInit = true;
    } else {
      isShowInit = false;
    }
    this.setData({
      isShowInit: isShowInit
    })
  },

  // 点击取消
  getBack(e) {
    wx.navigateBack({
      data: 1
    })
  },

  //点击搜索
  getSearch(e) {
    wx.showModal({
      title: '温馨提示', content: '该功能数据接口还在开发进程中…',
      success: function (res) {
        if (res.confirm) { }
        else if (res.cancel) { }
      }
    })
  }
})