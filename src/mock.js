const Mock = require('mockjs')

Mock.mock('/api/data', (req, res) => {
  return {
    data: [{
        img: "./static/star1.jpg",
        name: "小米平板",
        desc: "搭载NVDIA Tegra K1平板",
        price: 999,
        url: "index"
      },
      {
        img: "./static/star2.jpg",
        name: "小米电视2S 48英寸影院版",
        desc: "4K无损画质,薄至9.9mm",
        price: 3999,
        url: "index"
      },
      {
        img: "./static/star3.jpg",
        name: "小米盒子mini版(礼品装)",
        desc: "10亿，美金影视库,内容新增83%",
        price: 199,
        url: "index"
      },
      {
        img: "./static/star4.jpg",
        name: "小米Note 女神版",
        desc: "科技与时尚的理想结合",
        price: 1799,
        url: "index"
      },
      {
        img: "./static/star5.jpg",
        name: "小米路由器",
        desc: "主流双频AC智能路由器",
        price: 129,
        url: "index"
      },
      {
        img: "./static/star6.jpg",
        name: "小米蓝牙耳机",
        desc: "2015德国IF大奖，高清通话音质",
        price: 79,
        url: "index"
      },
      {
        img: "./static/star7.jpg",
        name: "小米净水器",
        desc: "400加仑大流量",
        price: 1299,
        url: "index"
      },
      {
        img: "./static/star8.jpg",
        name: "小米手环",
        desc: "美国ADI传感器，30天超长续航",
        price: 69,
        url: "index"
      },
      {
        img: "./static/star9.jpg",
        name: "小米智能摄像机",
        desc: "能看能听能说，手机远程观看",
        price: 129,
        url: "index"
      },
      {
        img: "./static/star10.jpg",
        name: "小米移动电源10000mAh",
        desc: "高密度进口电芯，仅名片大小",
        price: 69,
        url: "index"
      }
    ]
  }
})
Mock.mock('/api/recommend', (req, res) => {
  return {
    data: [{
        img: "./static/recom1.jpg",
        name: "小米Max2 全网通版 4GB内存",
        price: 1699,
        num: 48,
        url: "index"
      },
      {
        img: "./static/recom2.jpg",
        name: "小米电视4A 43英寸",
        price: 3999,
        num: 112,
        url: "index"
      },
      {
        img: "./static/recom3.jpg",
        name: "小米盒子mini版(礼品装)",
        price: 199,
        num: 352,
        url: "index"
      },
      {
        img: "./static/recom4.jpg",
        name: "小米Note 女神版",
        price: 1799,
        num: 3454,
        url: "index"
      },
      {
        img: "./static/recom5.png",
        name: "小米路由器",
        price: 129,
        num: 232,
        url: "index"
      },
      {
        img: "./static/recom6.png",
        name: "小米蓝牙耳机",
        price: 79,
        num: 124,
        url: "index"
      },
      {
        img: "./static/recom7.jpg",
        name: "小米净水器",
        price: 1299,
        num: 456,
        url: "index"
      },
      {
        img: "./static/recom8.jpg",
        name: "小米手环",
        price: 69,
        num: 53,
        url: "index"
      },
      {
        img: "./static/recom9.jpg",
        name: "小米智能摄像机",
        price: 129,
        num: 4545,
        url: "index"
      },
      {
        img: "./static/recom10.jpg",
        name: "小米移动电源10000mAh",
        price: 69,
        num: 122,
        url: "index"
      },
      {
        img: "./static/recom11.jpg",
        name: "小米移动电源10000mAh",
        price: 69,
        num: 12222,
        url: "index"
      },
      {
        img: "./static/recom12.jpg",
        name: "小米移动电源10000mAh",
        price: 69,
        num: 12546,
        url: "index"
      },
      {
        img: "./static/recom13.jpg",
        name: "小米移动电源10000mAh",
        price: 69,
        num: 122424,
        url: "index"
      },
      {
        img: "./static/recom14.jpg",
        name: "小米移动电源10000mAh",
        price: 69,
        num: 1234,
        url: "index"
      }, 
      {
        img: "./static/recom15.jpg",
        name: "小米移动电源10000mAh",
        price: 69,
        num: 646,
        url: "index"
      },                             
    ]
  }
})
