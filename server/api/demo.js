// api/demo.js

var dataDemo = {
    'hardwareimgs': [{
        img: "./static/hardware1.jpg",
        name: '小米门窗传感器',
        desc: "实时感知门窗开关状态",
        price: 39
      },
      {
        img: "./static/hardware2.jpg",
        name: '空气净化器',
        desc: "双风机 净化能力高达406m²",
        price: 33229
      },
      {
        img: "./static/hardware3.jpg",
        name: '小米WIFI放大器',
        desc: "小巧轻便|配对简单|随身安装",
        price: 3129
      },
      {
        img: "./static/hardware4.jpg",
        name: '小米路由器 青春版',
        desc: "将高性能路由器 凝聚于掌心大小",
        price: 349
      },
      {
        img: "./static/hardware5.jpg",
        name: '小米体重秤',
        desc: "高精度压力传感器 | 手机管理全家健康",
        price: 3945
      },
      {
        img: "./static/hardware6.jpg",
        name: '小米智能插座',
        desc: "手机远程遥控开关,带USB接口",
        price: 1239
      },
      {
        img: "./static/hardware7.jpg",
        name: '小米运动相机',
        desc: "边玩边录边拍,手机随时分享",
        price: 339
      },
      {
        img: "./static/hardware8.jpg",
        name: 'Yeelight床头灯',
        desc: "触摸式操作,给卧室1600万种颜色",
        price: 239
      }
    ]
    
}

exports.getData = function(method, data){
    var backData = {
        'hardwareimgs': [{
            img: "./static/hardware1.jpg",
            name: '小米门窗传感器',
            desc: "实时感知门窗开关状态",
            price: 39
          },
          {
            img: "./static/hardware2.jpg",
            name: '空气净化器',
            desc: "双风机 净化能力高达406m²",
            price: 33229
          },
          {
            img: "./static/hardware3.jpg",
            name: '小米WIFI放大器',
            desc: "小巧轻便|配对简单|随身安装",
            price: 3129
          },
          {
            img: "./static/hardware4.jpg",
            name: '小米路由器 青春版',
            desc: "将高性能路由器 凝聚于掌心大小",
            price: 349
          },
          {
            img: "./static/hardware5.jpg",
            name: '小米体重秤',
            desc: "高精度压力传感器 | 手机管理全家健康",
            price: 3945
          },
          {
            img: "./static/hardware6.jpg",
            name: '小米智能插座',
            desc: "手机远程遥控开关,带USB接口",
            price: 1239
          },
          {
            img: "./static/hardware7.jpg",
            name: '小米运动相机',
            desc: "边玩边录边拍,手机随时分享",
            price: 339
          },
          {
            img: "./static/hardware8.jpg",
            name: 'Yeelight床头灯',
            desc: "触摸式操作,给卧室1600万种颜色",
            price: 239
          }
        ]        
    }
    if(method == 'DELETE'){
        backData = {}
    }
    return JSON.stringify(backData);
}
