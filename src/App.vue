<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  zoom: 1;
}
.box_shadow{
  transition: all 0.35s;
  position: relative;
  z-index: 1;
}
.box_shadow:hover{
  transform: translate3d(0,-2px,0);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 20;
}
</style>
