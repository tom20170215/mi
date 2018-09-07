<template>
    <div :class="$style.recommond">
        <div :class="[$style.top, 'clearfix']">
            <h2>为你推荐</h2>
            <div :class="$style.btn">
                <a href="javascript:void(0)"><img :src=left alt="" @click="back"></a>
                <a href="javascript:void(0)"><img :src=right alt="" @click="forward"></a>
            </div>
        </div>
        <ul :class="[$style.list, 'clearfix']" :style="{left: listleft + 'px'}">
            <li v-for="(item,index) in items" :key="index" :style="styleObject[index]">
                <router-link :to=item.url>
                    <img :src=item.img alt="">
                </router-link>
                <h3>{{item.name}}</h3>
                <p>{{item.price}}元</p>
                <p>{{item.num}}人评价</p>
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
      left: "/static/left2.png",
      right: "/static/right1.png",
      items: [],
      // item的头部样式
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
        { "border-top": "1px solid #ffac13" },
        { "border-top": "1px solid #ffac13" },
        { "border-top": "1px solid #83c44e" },
        { "border-top": "1px solid #83c44e" },
        { "border-top": "1px solid #e53935" },
        { "border-top": "1px solid #00c0a5" }
      ],
      // list左边初始距离
      listleft: 0
    };
  },
  computed: {
    page() {
      return Math.abs(this.listleft) / 1240;
    }
  },
  methods: {
    back() {
      let that = this;
      if (this.page <= 0) {
        return;
      }
      new TWEEN.Tween(this.$data)
        .to({ listleft: that.listleft + 1240 }, 300)
        .start()
        .onComplete(function() {
          if (that.page <= 0) {
            that.left = '/static/left2.png'
            return;
          }
          that.right = '/static/right1.png'
        });
      animate();
    },
    forward() {
      let that = this;
      if (this.page >= 2) {
        return;
      }
      new TWEEN.Tween(this.$data)
        .to({ listleft: that.listleft - 1240 }, 300)
        .start()
        .onComplete(function() {
          if (that.page >= 2) {
            that.right = "/static/right2.png";
            return;
          }
            that.left = '/static/left1.png';
            console.log('1')
        });
      animate();
    }
  },
  mounted() {
    this.$axios.get("/api/recommend").then(res => {
      this.items = res.data.data;
    });
  }
};
</script>

<style lang="scss" module>
.recommond {
  overflow: hidden;
  .top {
    margin-top: 50px;
    margin-bottom: 30px;
    h2 {
      font-size: 22px;
      float: left;
    }
    .btn {
      float: left;
      margin-left: 1064px;
      a {
        display: block;
        float: left;
        width: 34px;
        height: 22px;
        border: 1px solid #e0e0e0;
        img {
          margin: 4px 0 0 12px;
        }
      }
    }
  }
  .list {
    width: 3720px;
    position: relative;
    li {
      float: left;
      width: 234px;
      height: 339px;
      background-color: #ffffff;
      margin-right: 14px;
      margin-bottom: 30px;
      a {
        display: block;
        margin: 20px 37px 0px 37px;
      }
      h3 {
        text-align: center;
        font-size: 15px;
      }
      p {
        text-align: center;
        font-size: 14px;
        &:nth-child(3) {
          color: #ff6700;
          margin-top: 20px;
        }
        &:nth-child(4) {
          color: #b0b0b0;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>

