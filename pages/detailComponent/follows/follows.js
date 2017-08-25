Page({

  data: {
    follows: [
      {
        'authorImg': '../../../image/user_icon/user_09.jpg',
        'authorName': '老铁扎心',
        'autograph': '再美的风景,你不上路,也只存在于别人眼中',
        'isFollow': true,
        'isBothFollow': false
      },
      {
        'authorImg': '../../../image/user_icon/user_14.jpg',
        'authorName': '影子',
        'autograph': '每一次没有终点的抵达，都是一次恰到好处的出发',
        'isFollow': true,
        'isBothFollow': false
      },
      {
        'authorImg': '../../../image/user_icon/user_18.jpg',
        'authorName': '豆浆粉',
        'autograph': '知足知不足，有为有不为',
        'isFollow': true,
        'isBothFollow': false
      },
      {
        'authorImg': '../../../image/user_icon/user_19.jpg',
        'authorName': '董师傅',
        'autograph': '选择自己所爱，爱自己所选择',
        'isFollow': true,
        'isBothFollow': false
      },
      {
        'authorImg': '../../../image/user_icon/user_22.jpg',
        'authorName': '鳄鱼叔叔',
        'autograph': '每个人出生时都是原创，只是自己渐渐变成了别人的盗版',
        'isFollow': true,
        'isBothFollow': false
      }
    ]
  },

  onLoad (e) {

  },

  // 取消关注
  cancelFollow(e) {
    const index = e.currentTarget.dataset.index;
    let that = this;
    let follows = this.data.follows;
    let isFollow = follows[index].isFollow;
    let isBothFollow = follows[index].isBothFollow;

    wx.showModal({
      title: '确认取消关注？', content: '', confirmText: '继续关注', cancelText: '不再关注',
      success: function (res) {
        if (res.confirm) { console.info("继续关注"); }
        else if (res.cancel) {
          follows.splice(index, 1);
          that.setData({
            follows: follows
          });
        }
      }
    });
  },
})