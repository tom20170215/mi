<template>
    <div :class="$style.nav">
        <div :class="$style.logo"></div>
        <ul :class="[$style.nav_list]">
            <li v-for="(item, index) in navs" :key="index" @mouseover="toggleNavmenu(index)" @mouseout="toggleNavmenu(index)">
                <a :href="item.url" :class="$style.navtitle">{{item.name}}</a>
                <transition name="fade" >
                <div :class="$style.navMenu" v-show="item.navmenushow">
                    <ul :class="[$style.nav_menu_list, 'clearfix']">
                        <li v-for="(phone, name) in item.navlist" :key="name">
                            <a :href=phone.url>
                                <img :src=phone.img alt="">
                            </a>
                            <p>{{phone.name}}</p>
                            <p>{{phone.price}}元</p>
                        </li>
                    </ul>
                </div>                    
                </transition>
            </li>
        </ul>
        <div :class="$style.search">
            <form action="">
                <input type="text" :class="$style.search_txt" @focus="toggleHotword" @blur="toggleHotword">
                <input type="submit" :class="$style.search_btn" value>
                    <div :class="$style.hot_word1" v-show="hotWord">
                        <a href="#">手环</a>
                    </div>
                    <div :class="$style.hot_word2" v-show="hotWord">
                        <a href="#">小米手机4</a>
                    </div>
            </form>
            <transition name="fade" enter-to-class="animated fadeInDown faster" leave-active-class="animated fadeOutUp faster">
                <ul :class="$style.search_extra" v-show="extrashow">
                <li v-for="(item, index) in searchs" :key="index">
                    <a :href=item.url>
                        <span :class="$style.spec_name">{{item.name}}</span>
                        <span :class="$style.result">约有{{item.num}}件</span>
                    </a>
                </li>
            </ul>        
            </transition>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          name: "小米手机",
          url: "#",
          navlist: [{name: '小米手机4C', price: 1299, img: '/static/nav_menu1_1.jpg', url: '#'}, {name: '小米手机', price: 999, img: '/static/nav_menu1_2.jpg', url: '#'}, {name: '小米note', price: 2400, img: '/static/nav_menu1_3.jpg', url: '#'}, {name: '小米4s', price: 1800, img: '/static/nav_menu1_2.jpg', url: '#'}],
          navmenushow: false
        },
        {
          name: "红米",
          url: "#",
          navlist: [{name: '小米手机4C', price: 1299, img: '/static/nav_menu2_1.jpg', url: '#'}, {name: '小米手机4C', price: 1299, img: '/static/nav_menu2_2.jpg', url: '#'}, {name: '小米手机4C', price: 1299, img: '/static/nav_menu2_3.jpg', url: '#'}, {name: '小米手机4C', price: 1299, img: '/static/nav_menu2_4.jpg', url: '#'}],
          navmenushow: false
        },
        {
          name: "平板",
          url: "#",
          navlist: [{name: '小米平板', price: 1299, img: '/static/nav_menu3_1.jpg', url: '#'}, {name: '小米平板', price: 1299, img: '/static/nav_menu3_2.jpg', url: '#'}],
          navmenushow: false
        },
        {
          name: "电视·盒子",
          url: "#",
          navlist: [{name: '小米电视', price: 1299, img: '/static/nav_menu4_1.jpg', url: '#'}, {name: '小米电视', price: 1299, img: '/static/nav_menu4_2.jpg', url: '#'}, {name: '小米电视', price: 1299, img: '/static/nav_menu4_3.jpg', url: '#'}, {name: '小米电视', price: 1299, img: '/static/nav_menu4_4.jpg', url: '#'}],
          navmenushow: false
        },
        {
          name: "路由器",
          url: "#",
          navlist: [{name: '小米路由', price: 1299, img: '/static/nav_menu5_1.jpg', url: '#'}, {name: '小米路由', price: 1299, img: '/static/nav_menu5_2.jpg', url: '#'}, {name: '小米路由', price: 1299, img: '/static/nav_menu5_3.jpg', url: '#'}, {name: '小米路由', price: 1299, img: '/static/nav_menu5_4.jpg', url: '#'}],
          navmenushow: false
        },
        {
          name: "智能硬件",
          url: "#",
          navlist: [{name: '智能硬件', price: 1299, img: '/static/nav_menu6_1.jpg', url: '#'}, {name: '智能硬件', price: 1299, img: '/static/nav_menu6_2.jpg', url: '#'}, {name: '智能硬件', price: 1299, img: '/static/nav_menu6_3.jpg', url: '#'}, {name: '智能硬件', price: 1299, img: '/static/nav_menu6_4.jpg', url: '#'}, {name: '智能硬件', price: 1299, img: '/static/nav_menu6_5.jpg', url: '#'}, {name: '智能硬件', price: 1299, img: '/static/nav_menu6_6.jpg', url: '#'}],
          navmenushow: false
        }
      ],
      hotWord: true,
      extrashow: false,
      searchs: [
        {
          url: "#",
          name: "移动电源",
          num: 22
        },
        {
          url: "#",
          name: "空气净化器",
          num: 22
        },
        {
          url: "#",
          name: "小米手环",
          num: 22
        },
        {
          url: "#",
          name: "WIFI",
          num: 22
        },
        {
          url: "#",
          name: "自拍杆",
          num: 22
        },
        {
          url: "#",
          name: "小米体重秤",
          num: 22
        },
        {
          url: "#",
          name: "小蚁摄像机",
          num: 22
        },
        {
          url: "#",
          name: "运动相机",
          num: 22
        },
        {
          url: "#",
          name: "智能插座",
          num: 22
        },
        {
          url: "#",
          name: "配件优惠套装",
          num: 22
        }
      ],
      Navmenu: false
    };
  },
  methods: {
    toggleHotword() {
      if (this.hotWord) {
        this.hotWord = false;
        this.extrashow = true;
        return;
      }
      this.hotWord = true;
      this.extrashow = false;
    },
    toggleNavmenu (index) {
        if (!this.navs[index].navmenushow) {
            this.navs[index].navmenushow = true
            return
        }
        this.navs[index].navmenushow = false
    }
  }
};
</script>

<style lang="scss" module>
.nav {
  height: 90px;
  .logo {
    background: url(/static/logo.png) 0 0 no-repeat;
    height: 55px;
    width: 55px;
    margin-right: 180px;
    margin-top: 20px;
    float: left;
    transition: all 0.5s;
    &:hover {
      transform: rotate(360deg);
    }
  }
  .nav_list {
    float: left;
    li {
      float: left;
       .navtitle {
        color: #333;
        font-size: 16px;
        padding: 26px 18px 40px;
        line-height: 90px;
        &:hover {
          color: #ff6700;
        }
      }
      .navMenu{
        z-index: 30;
        background-color: #fff;
        border-top: 1px solid #e0e0e0;
        width: 100%;
        padding: 20px 0;
        position: absolute;
        top: 140px;
        left:0px;
        .nav_menu_list{
            li{
                float: left;
                width: 204px;
                a{
                    display: block;
                    margin-bottom: 20px;
                    border-right: 1px solid #e0e0e0;
                    img{
                        margin: 0 auto;
                    }
                }
                p:nth-child(2){
                    color: #757575;
                    font-size: 12px;
                    text-align: center;
                    
                }
                p:nth-child(3){
                    color:#ff6700;
                    font-size:12px;
                    text-align: center;
                }
            }            
        }
      }
    }
  }
  .search {
    float: left;
    width: 300px;
    height: 50px;
    position: relative;
    margin-top: 15px;
    margin-left: 20px;
    .search_txt {
      width: 230px;
      height: 48px;
      z-index: 1;
      padding-left: 15px;
      float: left;
      border: 1px solid rgb(224, 224, 224);
      &:focus {
        border: 1px solid #ff6700;
        & + input {
          border-color: #ff6700;
        }
      }
    }
    .search_btn {
      float: left;
      border: 1px solid rgb(224, 224, 224);
      border-left: none;
      width: 53px;
      height: 50px;
      background: url(/static/search1.png) 16px 15px no-repeat;
      &:hover {
        cursor: pointer;
        background-image: url(/static/search2.png);
        background-color: #ff6700;
      }
    }
    .hot_word1,
    .hot_word2 {
      position: absolute;
      z-index: 2;
    }
    .hot_word1 a,
    .hot_word2 a {
      font-size: 12px;
      background: #e0e0e0;
      padding: 2px 4px;
      color: #ff6700;
      &:hover {
        color: #ffffff;
        background: #ff6700;
      }
    }
    .hot_word1 {
      top: 17px;
      left: 100px;
    }
    .hot_word2 {
      top: 17px;
      left: 150px;
    }
    .search_extra {
      width: 245px;
      position: absolute;
      top: 49px;
      left: 0;
      z-index: 2;
      border: 1px solid #ff6700;
      li {
        a {
          display: block;
          background: #fff;
          padding: 8px 10px;
          position: relative;
          &:hover {
            background-color: #e0e0e0;
            .spec_name {
              color: #ff6700;
            }
          }
          .spec_name {
            color: #424242;
            font-size: 12px;
            text-align: right;
          }
          .result {
            color: #b5b5b5;
            font-size: 10px;
            position: absolute;
            right: 15px;
            line-height: 16px;
          }
        }
      }
    }
  } 
}
</style>

