<template>
    <div :class="[$style.channel, 'clearfix']">
        <ul :class="$style.channelist">
            <li v-for="(item, index) in items" :key="index">
                <router-link :to="{name: item.url}">
                    <img :src=item.img alt="">
                    <p>{{item.title}}</p>
                </router-link>
            </li>
        </ul>
        <div :class="$style.banner">
            <img src="/static/hot6.jpg" alt="">
            <img src="/static/hot7.jpg" alt="">
            <img src="/static/hot8.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: "/static/channel1.png",
          url: "index",
          title: '电信专场'
        },
        {
          img: "/static/channel2.png",
          url: "index",
          title: '企业团购'
        },
        {
          img: "/static/channel3.png",
          url: "index",
          title: '官方产品'
        },
        {
          img: "/static/channel4.png",
          url: "index",
          title: '小米移动'
        },
        {
          img: "/static/channel5.png",
          url: "index",
          title: '话费充值'
        },
        {
          img: "/static/channel6.png",
          url: "index",
          title: '防查伪'
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
.channel {
  .channelist {
    width: 234px;
    height: 170px;
    background: #5f5750;
    float: left;
    li {
        float: left;
      a {
        display: block;
        width: 70px;
        height: 64px;
        padding-top: 18px;
        color: rgba(255, 255, 255, 0.7);
        border-bottom: 1px solid #665e57;
        border-right: 1px solid #665e57;
        text-align: center;
        line-height: 30px;
        margin-left: 7px;
        img{
            display: inline;
        }
        p{
            font-size: 12px;
        }
      }
    }
  }
  .banner{
      float: left;
      img{
          float: left;
          margin-left: 14.3px;
      }
  }
}
</style>

