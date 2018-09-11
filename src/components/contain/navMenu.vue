<template>
    <div :class="$style.navMenu">
        <ul>
            <li v-for="(item, index) in  items" :key="index">
                <a :href=item.url>
                    <img :src=item.img alt="">
                </a>
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "小米手机4C",
          price: 1299,
          img: "/static/nav_menu1_1.jpg",
          url: "#"
        },
        {
          name: "小米手机",
          price: 999,
          img: "/static/nav_menu1_2.jpg",
          url: "#"
        },
        {
          name: "小米note",
          price: 2400,
          img: "/static/nav_menu1_3.jpg",
          url: "#"
        },
        {
          name: "小米4s",
          price: 1800,
          img: "/static/nav_menu1_2.jpg",
          url: "#"
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
.navMenu {
  z-index: 30;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  width: 100%;
  padding: 20px 0;
  position: absolute;
  top: 140px;
  left: 0px;
  .nav_menu_list {
    li {
      float: left;
      width: 204px;
      a {
        display: block;
        margin-bottom: 20px;
        border-right: 1px solid #e0e0e0;
        img {
          margin: 0 auto;
        }
      }
      p:nth-child(2) {
        color: #757575;
        font-size: 12px;
        text-align: center;
      }
      p:nth-child(3) {
        color: #ff6700;
        font-size: 12px;
        text-align: center;
      }
    }
  }
}
</style>

