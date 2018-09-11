<template>
    <section :class="$style.content">
        <h2>内容</h2>
        <ul :class="[$style.contentlist, 'clearfix']">
            <li :class="[$style.book, 'box_shadow']" @mouseenter='toggleBtn()' @mouseleave='toggleBtn()'>
                <p>图书</p>
                <swiper :options='swiperOption'>
                    <swiperSlide v-for="(item, index) in books" :key="index">
                        <div :class="$style.contain">
                            <h4>{{item.name}}</h4>
                            <p>{{item.desc}}</p>
                            <p>{{item.price}}元</p>
                            <img :src=item.img alt="">
                        </div>
                    </swiperSlide>
                    <swiperSlide>
                        <div :class="$style.contain">
                            <p style="color:#b0b0b0;font-size:12px;margin:0 48px 10px;">海量好书，享受精品阅读时光<br/>漂亮的中文排版，千万读者选择！</p>
                            <router-link :to="{name: 'index'}" :class="$style.btn">前往多看阅读</router-link>
                            <img src="/static/tushu3.jpg" alt="" style="margin-top:30px;">
                        </div>
                    </swiperSlide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev swiper-left" slot="button-prev" v-show="btnshowTS"></div>
                    <div class="swiper-button-next swiper-right" slot="button-next" v-show="btnshowTS"></div>
                </swiper>
            </li>
            <li v-for="(item, index) in  items" :key="index" class="box_shadow" @mouseenter='toggleBtn(index)' @mouseleave='toggleBtn(index)'>
               <p>{{item.title}}</p>
                <swiper :options='item.swiperOption'>
                        <swiperSlide v-for="(li, index) in item.pages" :key="index">
                            <div :class="$style.contain">
                                <h4>{{li.h4}}</h4>
                                <p>{{li.desc}}</p>
                                <p>{{li.price}}</p>
                                <img :src=li.img alt="">
                            </div>
                        </swiperSlide>
                        <swiperSlide>
                            <div :class="$style.contain">
                                <p style="color:#b0b0b0;font-size:12px;margin:0 48px 10px;">{{item.lastpage.desc}}</p>
                                <router-link :to="{name: 'index'}" :class="[$style.btn, item.lastpage.style]">{{item.lastpage.theme}}</router-link>
                                <img :src=item.lastpage.img alt="" style="margin-top:30px;">
                             </div>                            
                        </swiperSlide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev swiper-left" slot="button-prev" v-show="item.btnshow"></div>
                        <div class="swiper-button-next swiper-right" slot="button-next" v-show="item.btnshow"></div>
                </swiper>
            </li>
        </ul>
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      items: [
        {
          title: "MIUI主题",
          pages: [
            {
              h4: "复仇者联盟3-我的英雄",
              desc: "28张超级英雄个人专属锁屏及桌面壁纸随你挑！",
              price: "8.8米币",
              img: "//i1.mifile.cn/a4/xmad_15290561352349_zNjLT.png"
            },
            {
              h4: "熊本熊 酷MA萌",
              desc: "戳一戳、摸一摸，酷MA萌会在锁屏跟你亲密互动哦。",
              price: "",
              img: "//i1.mifile.cn/a4/xmad_15360565735203_Uuvyd.jpg"
            },
            {
              h4: "蚁人2",
              desc: "小米主题和迪士尼首度合作，打造精品漫威系列主题",
              price: "",
              img: "//i1.mifile.cn/a4/xmad_15357000957252_GpoLc.png"
            }
          ],
          lastpage: {
            desc: "众多个性主题、百变锁屏与自由桌面让你的手机与众不同！",
            theme: "前往MIUI主题市场",
            img: "//s01.mifile.cn/i/index/more-miui.jpg",
            style: "green"
          },
          swiperOption: {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          },
          btnshow: false
        },
        {
          title: "游戏",
          pages: [
            {
              h4: "非人学园",
              desc: "脑洞大开的二次元竞技手游",
              price: "",
              img: "//i1.mifile.cn/a4/xmad_15299832299419_eIPOw.png"
            },
            {
              h4: "小米超神",
              desc: "实力派，一起团！！",
              price: "",
              img: "//i1.mifile.cn/a4/xmad_15120234492499_MNEVo.png"
            },
            {
              h4: "米柚手游模拟器",
              desc: "在电脑上玩遍小米所有手游",
              price: "免费",
              img: "//i1.mifile.cn/a4/T1czW_BXCv1R4cSCrK.png"
            }
          ],
          swiperOption: {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          },
          lastpage: {
            desc: "众多个性主题、百变锁屏与自由桌面让你的手机与众不同！",
            theme: "前往MIUI主题市场",
            img: "//s01.mifile.cn/i/index/more-game.jpg",
            style: "red"
          },
          btnshow: false
        },
        {
          title: "应用",
          pages: [
            {
              h4: "Forest",
              desc: "帮助您专心于生活中每个重要时刻",
              price: "免费",
              img: "//i1.mifile.cn/a4/T1TkKvBCKv1R4cSCrK.png"
            },
            {
              h4: "2017金米奖",
              desc: "最优秀的应用和游戏",
              price: "",
              img: "//i1.mifile.cn/a4/3332da7d-4056-4694-9548-c83b7b3af7d3"
            },
            {
              h4: "小米应用",
              desc: "小米出品 必属精品",
              price: "免费",
              img: "//i1.mifile.cn/a4/T15VZvB5Kv1R4cSCrK.png"
            }
          ],
          swiperOption: {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          },
          lastpage: {
            desc: "帮助小米手机和其他安卓手机用户 发现好用的安卓应用",
            theme: "前往MIUI主题市场",
            img: "//s01.mifile.cn/i/index/more-game.jpg",
            style: "blue"
          },
          btnshow: false
        }
      ],
      books: [
        {
          name: "哈利·波特与被诅咒的孩子",
          desc: "哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
          price: 29.37,
          img: "/static/tushu.png"
        },
        {
          name: "好吗好的",
          desc: "畅销作家大冰2016年新书！讲给你听，好吗好的！",
          price: 17.99,
          img: "/static/tushu1.png"
        }
      ],
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      btnshowTS: false
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    toggleBtn(num) {
      if (num === undefined) {
        this.btnshowTS = !this.btnshowTS;
        return;
      }
      this.items[num].btnshow = !this.items[num].btnshow;
    }
  }
};
</script>

<style lang="scss" module>
.content {
  margin-top: 50px;
  h2 {
    font-size: 22px;
    margin-bottom: 30px;
  }
  .contentlist {
    > li {
      float: left;
      width: 296px;
      height: 420px;
      box-sizing: border-box;
      padding-top: 45px;
      margin-right: 14px;
      margin-bottom: 14px;
      background-color: #fff;
      &:last-child {
        margin-right: 0;
      }
      p:nth-child(1) {
        font-size: 16px;
        text-align: center;
        margin-bottom: 20px;
      }
      .contain {
        height: 340px;
        h4 {
          font-size: 20px;
          margin: 0 20px 5px;
          font-weight: 400;
          text-align: center;
        }
        p:nth-child(2) {
          font-size: 12px;
          color: #b0b0b0;
          margin: 0 48px 10px;
          text-align: center;
          height: 40px;
        }
        p:nth-child(3) {
          font-size: 14px;
          margin: 0 10px 15px;
          text-align: center;
          width: 276px;
          height: 19px;
        }
        img {
          margin: auto;
          height: 154px;
        }
        .btn {
          width: 118px;
          height: 28px;
          font-size: 12px;
          line-height: 28px;
          border: 1px solid #ffac13;
          background: #fff;
          color: #ffac13;
          display: block;
          text-align: center;
          margin: 0 auto 15px;
          &:hover {
            background-color: #ffac13;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

<style lang='scss'>
@import "swiper/dist/css/swiper.css";

.swiper-button-prev,
.swiper-button-next {
  top: 37%;
}
.swiper-pagination-bullet-active {
  background: #ff6700;
}
.swiper-left {
  background: url(/static/content_left.png) no-repeat 0 0 / 100% 100%;
  left: 0;
  width: 20px;
  height: 24px;
  padding: 12px 0 12px;
  &:hover {
    background: url(/static/content_left_hover.png) no-repeat 0 0 / 100% 100%;
  }
}
.swiper-right {
  background: url(/static/content_right.png) no-repeat 0 0 / 100% 100%;
  right: 0;
  width: 20px;
  height: 24px;
  padding: 12px 0 12px;
  &:hover {
    background: url(/static/content_right_hover.png) no-repeat 0 0 / 100% 100%;
  }
}
.green {
  background-color: #fff !important;
  border-color: #83c44e !important;
  color: #83c44e !important;
  &:hover {
    color: #fff !important;
    background: #83c44e !important;
  }
}
.red {
  background-color: #fff !important;
  border-color: #e53935 !important;
  color: #e53935 !important;
  &:hover {
    color: #fff !important;
    background: #e53935 !important;
  }
}
.blue{
  background-color: #fff !important;
  border-color: #2196f3 !important;
  color: #2196f3 !important;    
  &:hover {
    color: #fff !important;
    background: #2196f3 !important;
  }  
}
</style>

