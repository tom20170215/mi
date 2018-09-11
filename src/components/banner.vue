<template>
<transition name="fade">
    <div :class="$style.banner" v-show="on">
        <button @click="close"></button>
    </div>
</transition>

</template>

<script>
export default {
  data() {
    return {
        on: true
    };
  },
  methods: {
    close() {
        this.on = false
        sessionStorage.setItem('ad', true)
    }
  },
  created(){
      if(sessionStorage.getItem('ad')){
          this.on = false
      }
  }
};
</script>

<style lang="scss" module>
.banner {
  position: relative;
  width: 100%;
  height: 120px;
  background: url(//i1.mifile.cn/a4/cms_15366315029349_PRtOe.jpg) no-repeat 0 0;
  button {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    border: 1px solid #ff6700;
    background: url(/static/close.png) no-repeat 0 0 / 20px 20px;
    &:hover{
        background: url(/static/close_hover.png) no-repeat 0 0/ 20px 20px;
    }
  }
}
</style>

