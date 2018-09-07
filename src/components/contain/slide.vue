<template>
    <div :class="$style.sliderbox">
        <swiper :options="swiperOption">
            <swiperSlide v-for="(item, index) in items" :key="index">
                <router-link :to="{name: item.url}">
                    <img :src=item.img alt="">
                </router-link>
            </swiperSlide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <ul :class="$style.category">
            <li v-for="(item, index) in categories" :key="index">
                <a href="">{{item.desc}}</a>
                <div></div>
            </li>
        </ul>
    </div>

</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      items: [
        {
          img: "/static/hot1.jpg",
          url: "index"
        }
      ],
      categories: [
        { desc: "手机 平板 电话卡" },
        { desc: "电视 盒子" },
        { desc: "路由器" },
        { desc: "移动电源" },
        { desc: "耳机 音箱" },
        { desc: "电池 存储卡" },
        { desc: "保护套 后盖" },
        { desc: "贴膜 其他配件" },
        { desc: "米兔 服装" },
        { desc: "箱包 其他周边" }
      ]
    };
  },
  created() {
    this.$axios.get("/static/data.json").then(res => {
        for(let i = 0; i< res.data.hotimg.length; i++){
            this.items.push(res.data.hotimg[i])
        }
    });
  }
};
</script>

<style lang="scss" module>
.sliderbox {
  position: relative;
  margin-bottom: 15px;
  .category {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 20px 0;
    height: 420px;
    width: 234px;
    background: rgba(0, 0, 0, 0.6);
    li > a {
      line-height: 42px;
      height: 42px;
      color: #fff;
      display: block;
      padding-left: 30px;
      background: url(/static/navMenu_icon.png) no-repeat 200px 5px;
      z-index: 30;
      font-size: 14px;
      &:hover {
        background: #ff6700;
      }
    }
  }
}
</style>

<style>
@import "swiper/dist/css/swiper.css";
.swiper-pagination-bullet {
  border: 2px solid #fff;
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
}
.swiper-pagination-bullet-active {
  background: rgba(255, 255, 255, 0.4);
}
</style>


