<template>
    <Panel title="配件" :class="[$style.panel, 'clearfix']">
        <ul slot="nav" :class="$style.nav">
            <li v-for="(type,index) in navs" :key="index" :class="{cur:isCur == index}" @mouseenter='changeContent(index)'>
                <router-link :to='{name: type.url}' >{{type.name}}</router-link>
            </li>
        </ul>
        <div slot="main" :class="$style.main">
            <img src="/static/accessory1.jpg" alt="">
            <img src="/static/accessory6.jpg" alt="">
        </div>
            <component :is="componentId" :class="$style.content" slot="content"></component>          
    </Panel>
</template>

<script>
import Panel from "./panel.vue";
import select1 from './hot.vue';
import select2 from './ear.vue';
import select3 from './battery.vue';
import select4 from './storage.vue';
import select5 from './more.vue';
export default {
  data() {
    return {
      navs: [
        {
          name: "热门",
          url: "index"
        },
        {
          name: "保护套",
          url: "index"
        },
        {
          name: "后盖",
          url: "index"
        },
        {
          name: "贴膜",
          url: "index"
        },
        {
          name: '其他配件',
          url: 'index'
        }
      ],
      isCur: 0,
      componentId: 'select1'
    };
  },
  components: {
    Panel,
    select1,
    select2,
    select3,
    select4,
    select5
  },
  methods: {
    changeContent(index) {
      this.isCur = index;
      this.componentId = 'select' + (index + 1);
    }
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  .nav {
    float: right;
    li {
      float: left;
      a {
        display: block;
        margin-left: 24px;
        transition: border-bottom 0.5s;
        border-bottom: 2px solid rgba(205, 103, 0, 0);
        &:hover {
          color: #ff6700;
          border-bottom: 2px solid rgba(205, 103, 0, 1);
        }
      }
    }
  }
  .main {
    width: 234px;
    float: left;
    img {
      margin-bottom: 14px;
      float: left;
    }
  }
}
</style>

<style lang="scss" scoped>
.cur a{
  color: #ff6700;
  border-bottom: 2px solid rgba(205, 103, 0, 1) !important;
}
</style>



