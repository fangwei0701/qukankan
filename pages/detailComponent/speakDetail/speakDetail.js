Page({

  data: {
    speakDetails: {
      'authorImg': '../../../image/user_icon/user_23.jpg',
      'authorName': '影子',
      'issueTime': '2017-02-03',
      'issueCont': '读大学的时候，寝室对面恰好就是小吃街，饭店紧挨着饭店，想改善伙食了，就下楼，穿横道，撒丫子跑过去，有时运气好，刚要过横道，正赶上绿灯，大喜，一路绝尘，想也不想就跳进了人的河里。',
      'comment': [
        {
          'commentImg': '../../../image/user_icon/user_17.jpg',
          'commentNmae': '煞科',
          'commentCont': '再美的风景,你不上路,也只存在于别人眼中',
          'floorNum': '1',
          'floorTime': '20分钟前',
          'likeNum': '20',
          'isLike': true
        },
        {
          'commentImg': '../../../image/user_icon/user_15.jpg',
          'commentNmae': '美国队长',
          'commentCont': '知之为知之,不知为不知',
          'floorNum': '2',
          'floorTime': '10分钟前',
          'likeNum': '5',
          'isLike': false
        }
      ]
    },
    floorTotalNum: 0
  },

  onLoad: function (options) {
    let speakDetails = this.data.speakDetails;
    this.setData({
      floorTotalNum: speakDetails.comment.length
    })
  }
})