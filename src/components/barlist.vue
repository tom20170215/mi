<template>
    <div class="barlist" ref="barlist">
        <ul>
            <li>
                <img src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png" alt="">
                <p>个人中心</p>
            </li>
            <li>
                <img src="https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png" alt="">
                <p>联系客服</p>
            </li>
            <li>
                <img src="https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png" alt="">
                <p>购物车</p>
            </li>
        </ul>
        <a href="#anchor" v-show="arrow">
            <img src="//i1.mifile.cn/f/i/2018/home/totop.png" alt="">
        </a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      arrow: false
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 700) {
        this.arrow = true;
      }
      if (document.documentElement.scrollTop <= 700) {
        this.arrow = false;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.barlist {
  position: fixed;
  bottom: 150px;
  right: 0;
  ul {
    width: 82px;
    li {
      background: #fff;
      border-bottom: 1px solid #f5f5f5;
      width: 82px;
      height: 90px;
      display: block;
      &:nth-child(3) {
        border-bottom: 0;
      }
      cursor: pointer;
      img {
        margin: auto;
        width: 30px;
        height: 30px;
        padding-top: 22px;
      }
      p {
        font-size: 14px;
        color: #757575;
        text-align: center;
      }
    }
  }
  a {
    display: block;
    width: 82px;
    height: 92px;
    background: #fff;
    margin-top: 20px;
    img {
      margin: auto;
      padding-top: 30px;
    }
  }
}
@media screen and (max-width: 1420px) {
  .barlist {
    right: 50%;
    margin-right: -641px;
    width: 27px;
    ul {
      li {
        width: 27px;
        height: 40px;
        box-sizing: border-box;
        border-bottom: 1px solid #f5f5f5;
        img {
          width: 20px;
          height: 20px;
          padding-top: 9px;
        }
        p {
          display: none;
        }
      }
    }
    a {
      width: 27px;
      height: 39px;
      border: 1px solid #f5f5f5;
      img {
        width: 20px;
        height: 20px;
        padding-top: 12px;
      }
    }
  }
}
</style>

