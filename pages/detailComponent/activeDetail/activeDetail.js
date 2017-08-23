Page({

  data: {
    tabnavs: [
      { name: '活动介绍', id: 'intro' },
      { name: '活动行程', id: 'route' },
      { name: '费用说明', id: 'fee' },
      { name: '更多介绍', id: 'more' }
    ],
    detials: {
      'img': '../../../image/1_02.jpg',
      'name': '藏西南 俗称西藏中的西藏-疑是天堂景,错落凡间醉人心',
      'time':'2017-09-09',
      'pice': '4500.00',
      'totalPerson': '30',
      'currePerson': '10',
      'togethPlace': '贵阳',
      'destination': '贵阳 安顺 织金',
      'organizImg': '../../../image/weakChina.jpg',
      'isAttest': true,
      'organizName': '趣看看户外俱乐部',
      'followNumb': '120K',
      'activeNumb': '100',
      'activeIntr': {
        'title': '活动介绍',
        'content': [
          '有人说西藏去的人多了就俗了，巴廊街到处是游客，西藏也不显得那么神圣了，又有人说去西藏是一种病，不去治不好。',
          '驴说西藏不俗，是你去的西藏俗了，真正的西藏依然有无数的圣洁之地。',
          '在西藏的南边有一个与不丹接壤的地方，光芒被林芝，阿里，拉萨掩盖，名不见经传，它确是西藏中的西藏，我相信就帖子里的图片已经让你，美醉成仙。',
          '那里便是西藏山南地区，也是西藏中的藏民族和藏文化从这里诞生并走出，拉姆拉措神湖，第一代藏王在这里诞生，西藏第一座宫殿，第一座三宝俱全的寺院在这里拔地而起。拉萨的-布达拉宫，大昭寺，玛吉阿米艳遇的传说等等......'
        ],
        'isImg': true,
        'enjoyImgs': [
          '../../../image/5_01.jpg',
          '../../../image/5_02.jpg',
          '../../../image/5_03.jpg',
          '../../../image/5_04.jpg',
          '../../../image/5_05.jpg'
        ]
      },
      'activeRoute': {
        'title': '活动行程',
        'content': [
          {
            'day': 'Day1',
            'dayRoute': '丽江—长江第一湾-虎跳峡—香格里拉 (藏民家访）住香格里拉藏式标间'
          },
          {
            'day': 'Day2',
            'dayRoute': '香格里拉—金沙江沿途田园风光--金沙江大拐弯--白马雪山丫口（4292米）—看梅里雪山日落 -住飞来寺梅里雪山（住飞来寺观景房）'
          },
          {
            'day': 'Day3',
            'dayRoute': '早上起来看完日照金山出发去西当村-雨崩-神瀑-回到上雨崩住宿'
          },
          {
            'day': 'Day4',
            'dayRoute': '上雨崩—大本营 -冰湖—上雨崩'
          },
          {
            'day': 'Day5',
            'dayRoute': '雨崩村—西当村—梅里雪山飞来寺 ;（天气较好的情况下这一天可走尼龙大峡谷出）'
          },
          {
            'day': 'Day6',
            'dayRoute': '看梅里雪山日出—白马雪山丫口（海拔4292米）—依拉草原（纳帕海）—拉市海-丽江'
          }
        ]
      },
      'activeFee': {
        'title': '费用说明',
        'content': [
          {
            'explTitle': '费用包含',
            'explConte': '每人-4500元 拉萨往返山南地区的包车费用，8晚标间住宿【想自己单住的联系领队补单房差，帖子提到的山南地区的景区门票，部分地区的早餐'
          },
          {
            'explTitle': '费用不包含',
            'explConte': '各地往返拉萨的大交通，正餐，及不可抗力产生的费用，由于山南地区公路有些地方塌方或不可预知的情况可能会产生额外的用车费用，大家集体AA。'
          },
          {
            'explTitle': '退款规则',
            'explConte': '活动前5天退出的，有替补的找替补  没有替补的 只退百分之四十，活动当天和活动中退出的所有费用不退，只退没产生的门票费用 【注】：保险购买后自动生效。如有活动退款，只按照活动退款金额正常退款。'
          }
        ]
      },
      'moreIntro': {
        'title': '更多介绍',
        'ownEquip': {
          'isShow': true,
          'title': '自带装备',
          'content': [
            {
              'title': '衣物类',
              'detail': '冲锋衣裤,抓绒衣裤(保暖),皮肤衣,帽子(一顶防晒、一顶保暖),头巾围脖,保暖手套,登山杖,登山鞋'
            },
            {
              'title': '箱包类',
              'detail': '60L左右户外背包(根据个人适当选择),小背包(用于存储当日的食材,以及个人物品)'
            },
            {
              'title': '生活用品类',
              'detail': '防晒霜,太阳镜，雨伞或雨衣,唇膏,保温杯,个人洗漱用品(洁癖的人注意)'
            },
            {
              'title': '证件类',
              'detail': '身份证(必须带),护照,导游证,学生证,军官证(部分景区可以减免门票)'
            },
            {
              'title': '药物类',
              'detail': '感冒药,个人常规药品(尤其对药物过敏者)'
            },
            {
              'title': '饮食类',
              'detail': '对于饮食不习惯的伙伴,可带一些高能量、开胃的食物与水果,如：巧克力、牛肉粒、面包、辣条、苹果、梨子等'
            },
            {
              'title': '摄影器材类',
              'detail': '手机,自拍杆,单反相机,数码相机,各种长枪镜头(注意防水防尘等)'
            },
          ]
        },
        'applyNotice': {
          'isShow': true,
          'title': '报名须知',
          'content': [
            '1、老、弱、病、残、孕等人请慎重报名',
            '2、十二岁以下的小孩请慎重报名,十二岁以上的未成年需要家长或者监护人陪同',
            '3、患有心脏病、恐高症等请慎重报名',
            '4、没有团队合作意识、不听领队等慎重报名',
            '5、鉴于违背上述条件报名者，产生的一切后果自负'
          ]
        },
        'applyProces': {
          'isShow': true,
          'title': '报名流程'
        },
        'startCaut': {
          'isShow': true,
          'title': '开团提醒'
        },
        'announcement': {
          'isShow': true,
          'title': '注意事项'
        },
        'accidentSafe': {
          'isShow': true,
          'title': '意外保险'
        }
      }
    },
    curIndex: 0
  },

  onLoad(e) { 

  },

  // tab切换
  switchTab(e) {
    let curIndex = this.data.curIndex;
    this.setData({
      curIndex: e.currentTarget.dataset.index
    })
  },

  // 开始报名
  getSignUp(){
    wx.showModal({
      title: '温馨提示', content: '该功能还在开发中……', confirmText: '再等等', cancelText: '那就等等',
      success: function (res) {
        if (res.confirm) { console.info("那就等等"); }
        else if (res.cancel) {
          follows[index].isFollow = false;
          that.setData({
            follows: follows
          });
        }
      }
    });
  }
})