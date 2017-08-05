Page({
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  //编辑地址
  editAddress() {
    wx.navigateTo({
      url: './newAddress/newAddress?title=newAddress'
    })
  }
})