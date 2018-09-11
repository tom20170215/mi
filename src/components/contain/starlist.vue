<template>
    <div :class="$style.star">
        <div :class="[$style.top, 'clearfix']">
            <h2>小米明星单品</h2>
            <div :class="$style.btn">
                <a href="javascript:void(0)" :class="$style.left" @click="back">
                    <img :src=left alt="">
                </a>
                <a href="javascript:void(0)" :class="$style.right" @click="forward">
                    <img :src=right alt="">
                </a>
            </div>
        </div>
        <ul :class="[$style.starlist, 'clearfix']" :style="{left: starlistleft + 'px'}">
            <li v-for="(item, index) in items" :key="index" :class="$style.staritem" :style="styleObject[index]">
                <router-link :to=item.url>
                    <img :src=item.img alt="">
                </router-link>
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
                <p>{{item.price}}元</p>
            </li>
        </ul>
    </div>
</template>

<script>
function animate() {
  if (TWEEN.update()) {
    requestAnimationFrame(animate);
    return;
  }
}
export default {
  data() {
    return {
      imgSrc: [
        "/static/left1.png",
        "/static/left2.png",
        "/static/right1.png",
        "/static/right2.png"
      ],
      left: "/static/left2.png",
      right: "/static/right1.png",
      items: [],
      styleObject: [
        { "border-top": "1px solid #ffac13" },
        { "border-top": "1px solid #83c44e" },
        { "border-top": "1px solid #83c44e" },
        { "border-top": "1px solid #e53935" },
        { "border-top": "1px solid #00c0a5" },
        { "border-top": "1px solid #ffac13" },
        { "border-top": "1px solid #83c44e" },
        { "border-top": "1px solid #83c44e" },
        { "border-top": "1px solid #e53935" },
        { "border-top": "1px solid #ffac13" }
      ],
      starlistleft: 0,
      doAnimate: true
    };
  },
  computed: {
    page() {
      return Math.abs(this.starlistleft) / 1234;
    }
  },
  methods: {
    forward() {
      let that = this;
      if (that.page >= 1 || !this.doAnimate) {
        return;
      }
      new TWEEN.Tween(this.$data)
        .to({ starlistleft: that.starlistleft - 1234 }, 300)
        .start()
        .onComplete(function() {
          that.right = "/static/right2.png"
          that.left = "/static/left1.png"
          that.doAnimate = true
        });
      animate();
      this.doAnimate = false;
    },
    back() {
      let that = this;
      if (that.page <= 0 || !this.doAnimate) {
        return;
      }
      new TWEEN.Tween(this.$data)
        .to({ starlistleft: that.starlistleft + 1234 }, 300)
        .start()
        .onComplete(function() {
          that.left = "/static/left2.png"
          that.right = "/static/right1.png"
          that.doAnimate = true
        });
      animate();
      this.doAnimate = false
    }
  },
  created() {
    this.$axios.get("/api/data").then(res => {
      this.items = res.data.data;
    });
  }
};
</script>

<style lang="scss" module>
.star {
  position: relative;
  overflow: hidden;
  width: 1226px;
  height: 500px;
  .top {
    margin-top: 50px;
    height: 50px;
    h2 {
      float: left;
      font-size: 22px;
      font-weight: normal;
      color: #333;
    }
    .btn {
      float: left;
      margin-left: 1022px;
      margin-top: 10px;
      a {
        display: block;
        width: 34px;
        height: 22px;
        border: 1px solid #e0e0e0;
        float: left;
        img {
          margin: 4px 0 0 12px;
        }
      }
    }
  }
  .starlist {
    width: 2480px;
    position: absolute;
    .staritem {
      width: 234px;
      height: 300px;
      background-color: #fafafa;
      padding-top: 39px;
      margin-right: 14px;
      margin-bottom: 30px;
      float: left;
      a {
        display: block;
        margin: 0 37px 30px 37px;
        img {
          margin: auto;
        }
      }
      h3 {
        text-align: center;
        font-size: 14px;
        font-weight: normal;
        color: #212121;
      }
      p {
        text-align: center;
        font-size: 12px;
        &:nth-child(3) {
          color: #b0b0b0;
          margin-bottom: 10px;
        }
        &:nth-child(4) {
          color: #ff6700;
        }
      }
    }
  }
}
</style>

