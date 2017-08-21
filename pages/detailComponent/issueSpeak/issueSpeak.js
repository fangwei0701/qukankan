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
    wx.chooseImage({
      count: 9,                             // 9张
      sizeType: ['original', 'compressed'], // 原图、压缩图
      sourceType: ['album', 'camera'],      // 相册、相机
      success: function (res) {
        let tempFilePaths = res.tempFilePaths;  //tempFilePath可以作为img标签的src属性显示图片

        for (let i = 0; i < tempFilePaths.length;i++){
          if (imgArray.length <9){
            imgArray.push(tempFilePaths[i]);
          }
        }
        that.setData({
          imgArray: imgArray
        })
      }
    })
  }
})