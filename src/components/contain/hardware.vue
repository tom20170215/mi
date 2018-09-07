<template>
    <Panel title="智能硬件" :class="[$style.panel, 'clearfix']">
        <div slot="nav" :class="$style.nav">
            <router-link :to="{name: 'index'}" >
            </router-link>
        </div>
        <div slot="main" :class="[$style.main, 'box_shadow']">
            <img src="../../../static/hardware0.jpg" alt="">
        </div>
        <ul slot="content" :class="[$style.content]">
            <li v-for="(item, index) in items" :key="index" :class="[$style.list, 'box_shadow']">
                <img :src=item.img alt="">
                <p :class="$style.title">{{item.name}}</p>
                <p :class="$style.desc">{{item.desc}}</p>
                <p :class="$style.price">{{item.price}}元</p>
            </li>
        </ul>
    </Panel>
</template>

<script>
import Panel from "./panel.vue";
export default {
  data() {
    return {
      items: []
    };
  },
  components: {
    Panel
  },
  methods: {},
  created() {
    var baseURL = 'http://localhost:3000/api';
    this.$axios({
      url: baseURL+'/demo',
      method: 'post',
      data: JSON.stringify({id: 1})
    }).then(res => this.items = res.data.hardwareimgs);
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  .nav {
    float: right;
    margin-top: 10px;
    a {
      display: block;
      width: 92px;
      height: 26px;
      background: url(/static/view_all1.png) no-repeat 0 0;
      &:hover {
        background: url(/static/view_all2.jpg) no-repeat 0 0;
      }
    }
  }
  .main {
    float: left;
  }
  .content {
    float: left;
    width: 992px;
    .list {
      float: left;
      width: 234px;
      height: 260px;
      padding: 20px 0;
      margin-left: 14px;
      margin-bottom: 14px;
      background: #fff;
      img {
        margin: auto;
      }
      p {
        text-align: center;
        &.title{
            color: #212121;
            font-size: 14px;
        }
        &.desc {
          font-size: 12px;
          color: #b0b0b0;
          margin-bottom: 10px;
        }
        &.price{
            color: #ff6700;
            font-size:14px;
        }
      }
    }
  }
}
</style>

