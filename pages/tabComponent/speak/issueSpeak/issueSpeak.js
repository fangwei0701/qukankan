Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArray: [],
    iShowAddImg: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //添加图片
  addImg(e) {
    let that = this;
    let imgArray = that.data.imgArray;
    let iShowAddImg = that.data.iShowAddImg;
    wx.chooseImage({
      count: 9, sizeType: ['original', 'compressed'], sourceType: ['album', 'camera'],
      success: function (res) {
        let tempFilePaths = res.tempFilePaths;  //tempFilePath可以作为img标签的src属性显示图片

        for (let i = 0; i < tempFilePaths.length; i++) {
          if (imgArray.length < 9) {
            imgArray.push(tempFilePaths[i]);
          } else {
            iShowAddImg = false;
          }
        }
        that.setData({
          imgArray: imgArray,
          iShowAddImg: iShowAddImg
        })
      }
    })
  },

  //发布
  getIssueBtn(e) {
    wx.showModal({
      title: '温馨提示', content: '该功能模块正在开发中……',
      success: function (res) {
        if (res.confirm) { console.info("继续关注"); }
        else if (res.cancel) { }
      }
    });
  }
})