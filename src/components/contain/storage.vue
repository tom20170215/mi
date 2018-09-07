<template>
    <ul slot="content" :class="$style.content">
         <li v-for="(item, index) in items" :key="index" class="box_shadow">
            <img :src=item.img alt="">
            <p>{{item.name}}</p>
            <p>{{item.price}}元</p>
            <p>{{item.num}}人评价</p>
        </li>
        <li>
            <div :class="[$style.top, 'box_shadow']">
                <p>铁三角耳机</p>
                <p>17.9元</p>
                <img src="/static/match_hot_small1.jpg" alt="">
            </div>
            <div :class="[$style.bottom, 'box_shadow']">
                <p>浏览更多</p>
                <p>电池存储卡</p>
                <img src="/static/more.jpg" alt="">
            </div>
        </li>
    </ul>    
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: "/static/match_hot2.jpg",
          name: "CR2032纽扣电池",
          price: 20,
          num: 4589
        },
        {
          img: "/static/match_hot3.jpg",
          name: "CR2032纽扣电池",
          price: 20,
          num: 4589
        },
        {
          img: "/static/match_hot4.jpg",
          name: "CR2032纽扣电池",
          price: 20,
          num: 4589
        },
        {
          img: "/static/match_hot5.jpg",
          name: "CR2032纽扣电池",
          price: 20,
          num: 4589
        },
        {
          img: "/static/match_hot7.jpg",
          name: "CR2032纽扣电池",
          price: 20,
          num: 4589
        },
        {
          img: "/static/match_hot8.jpg",
          name: "CR2032纽扣电池",
          price: 20,
          num: 4589
        },
        {
          img: "/static/match_hot9.jpg",
          name: "CR2032纽扣电池",
          price: 20,
          num: 4589
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
.content {
  float: left;
  width: 992px;
  li {
    float: left;
    width: 194px;
    height: 232px;
    padding: 34px 20px;
    margin: 0 0 14px 14px;
    background: #fff;
    img {
      width: 150px;
      height: 150px;
      margin: auto;
    }
    p {
      text-align: center;
      font-size: 14px;
    }
    p:nth-child(2) {
      color: #212121;
    }
    p:nth-child(3) {
      margin-bottom: 10px;
      color: #ff6700;
    }
    p:nth-child(4) {
      color: #b0b0b0;
      font-size: 12px;
    }
    &:last-child {
      padding: 0;
      width: 234px;
      height: 300px;
      background-color: #f5f5f5;
    }
  }
  .top,
  .bottom {
    height: 143px;
    position: relative;
    background: #fff;
    margin-bottom: 14px;
    p:nth-child(1) {
      position: absolute;
      top: 50px;
      left: 30px;
      color: #333;
    }
    p:nth-child(2) {
      position: absolute;
      top: 70px;
      left: 30px;
      color: #ff6700;
    }
    img {
      width: 80px;
      height: 80px;
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }
}
</style>


