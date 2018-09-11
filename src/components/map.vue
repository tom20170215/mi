<template>
    <baidu-map :class="$style.view" :center='center' :zoom='zoom'>
        <bm-navigation anchor='BMAP_ANCHOR_TOP_RIGHT'>
        </bm-navigation>
        <bm-geolocation anchor='BMAP_ANCHOR_BOTTOM_RIGHT' :showAddressBar='true' :autoLocation='true'></bm-geolocation>
    </baidu-map>
</template>

<script>
export default {
  data() {
    return {
      center: { lng: 113.9611784302, lat: 22.5449735111},
      zoom: 16
    };
  }
};
</script>

<style lang="scss" module>
.view {
  height: 100px;
}
</style>

