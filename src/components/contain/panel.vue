<template>
    <section :class="[panelClass, cname]">
        <div class='head clearfix'>
            <h2>{{title}}</h2>
            <slot name="nav"></slot>
        </div>
        <slot name="main"></slot>
        <slot name="content"></slot>
    </section>
</template>

<script>
export default {
  data() {
    return {
      panelClass: "panel"
    };
  },
  props: {
    cname: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
@import "../../css/element.scss";
.panel {
  @include panel;
  .head {
    margin-top: 50px;
    height: 50px;
  }
}
</style>

