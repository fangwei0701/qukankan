var special_active_data = [
  {
    "title": "黔灵山短程徒步",
    "imgUrl": "../../image/1_01.jpg"
  },
  {
    "title": "青岩古镇一日游",
    "imgUrl": "../../image/1_02.jpg"
  },
  {
    "title": "森林公园露营",
    "imgUrl": "../../image/1_03.jpg"
  },
  {
    "title": "南江大峡谷瀑布",
    "imgUrl": "../../image/1_04.jpg"
  }
];

var special_equip_data = [
  {
    "title": "匡途 户外登山杖碳素 超轻三节杖手杖拐杖外锁伸缩拐棍旅游装备",
    "imgUrl": "../../image/2_01.jpg",
    "pice": "138.00"
  },
  {
    "title": "【热销7.8万双】骆驼户外登山鞋男鞋秋季牛皮防滑户外越野徒步鞋",
    "imgUrl": "../../image/2_02.jpg",
    "pice": "180.00"
  },
  {
    "title": "【第四代液压帐篷】骆驼帐篷户外3-4人 全自动速开防雨露营帐篷",
    "imgUrl": "../../image/2_03.jpg",
    "pice": "289.00"
  },
  {
    "title": "天火LED强光手电筒 远射5000超亮变焦户外家用可充电迷你防水防身",
    "imgUrl": "../../image/2_04.jpg",
    "pice": "30.00"
  }
];

var shopCart_data = [
  {
    'id': 1,
    'title': '骆驼户外旗舰店',
    'content': [
      {
        'shopName': '天火LED强光手电筒 远射5000超亮变焦户外家用可充电迷你防水防身使用好',
        'imgUrl': '../../../image/2_04.jpg',
        'number': 1,
        'pice': '98.00',
        'prop': '黄色',
        'size': 'XX',
        'iSelect': false
      },
      {
        'shopName': '天火LED强光手电筒 远射5000超亮变焦户外家用可充电迷你防水防身使用好',
        'imgUrl': '../../../image/2_01.jpg',
        'number': 1,
        'pice': '120.00',
        'prop': '军绿色',
        'size': 'XXL',
        'iSelect': false
      }
    ]
  },
  {
    'id': 2,
    'title': '天火官方旗舰店',
    'content': [
      {
        'shopName': '天火LED强光手电筒 远射5000超亮变焦户外家用可充电迷你防水防身',
        'imgUrl': '../../../image/2_03.jpg',
        'number': 1,
        'pice': '134.00',
        'prop': '白色',
        'size': 'XL',
        'iSelect': false
      }
    ]
  },
  {
    'id': 3,
    'title': '探路者官方旗舰店',
    'content': [
      {
        'shopName': '天火LED强光手电筒 远射5000超亮变焦户外家用可充电迷你防水防身',
        'imgUrl': '../../../image/2_03.jpg',
        'number': 1,
        'pice': '453.00',
        'prop': '黑色',
        'size': 'S',
        'iSelect': false
      }
    ]
  }
];

var myActive_data = [
  {
    "id": "0",
    "title": "参与的活动",
    "detail": [
      {
        "time": '2016-07-20',
        "iconImg": '../../../image/icon/goon.png',
        "place": "成都",
        "imgUrl": "../../../image/1_01.jpg",
        "content": "山花烂漫 年宝玉则仙女湖 妖女胡 上下日干措经典徒步穿越",
        "isGoing": true,
        "id": '01'
      },
      {
        "time": '2017-05-20',
        "iconImg": '../../../image/icon/gameover.png',
        "place": "乌鲁木齐",
        "imgUrl": "../../../image/1_03.jpg",
        "content": "山花烂漫 年宝玉则仙女湖 妖女胡 上下日干措经典徒步穿越",
        "isGoing": false,
        "id": '03'
      },
      {
        "time": '2017-06-20',
        "iconImg": '../../../image/icon/gameover.png',
        "place": "香格里拉",
        "imgUrl": "../../../image/1_04.jpg",
        "content": "山花烂漫 年宝玉则仙女湖 妖女胡 上下日干措经典徒步穿越",
        "isGoing": false,
        "id": '04'
      }
    ]
  },
  {
    "id": "1",
    "title": "发布的活动",
    "detail": [
      {
        "time": '2017-08-20',
        "iconImg": '../../../image/icon/goon.png',
        "place": "贵阳",
        "imgUrl": "../../../image/1_01.jpg",
        "content": "山花烂漫 年宝玉则仙女湖 妖女胡 上下日干措经典徒步穿越",
        "isGoing": true,
        "id": '01'
      },
      {
        "time": '2017-08-20',
        "iconImg": '../../../image/icon/goon.png',
        "place": "乌鲁木齐",
        "imgUrl": "../../../image/1_01.jpg",
        "content": "山花烂漫 年宝玉则仙女湖 妖女胡 上下日干措经典徒步穿越",
        "isGoing": true,
        "id": '01'
      },
      {
        "time": '2017-06-20',
        "iconImg": '../../../image/icon/gameover.png',
        "place": "香格里拉",
        "imgUrl": "../../../image/1_04.jpg",
        "content": "山花烂漫 年宝玉则仙女湖 妖女胡 上下日干措经典徒步穿越",
        "isGoing": false,
        "id": '04'
      }
    ]
  },
]

module.exports = {
  active_data: special_active_data,
  equip_data: special_equip_data,
  shopCart_data: shopCart_data,
  myActive_data: myActive_data
}