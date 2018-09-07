<template>
    <div class="comWidth">
        <Nav/>
        <Slide/>
        <Channel/>
        <Starlist/>
        <Hardware/>
        <Ad img="https://i1.mifile.cn/a4/xmad_15284242510723_zpPHh.jpg" />
        <Match/>
        <Ad img="https://i1.mifile.cn/a4/xmad_15350103321586_gHozZ.jpg" />
        <Accessories/>
        <Ad img='https://i1.mifile.cn/a4/xmad_15204795762271_ZwaxE.jpg' />
        <Recommend/>
        <Review/>
        <Content/>
    </div>
</template>

<script>
import Nav from './nav.vue'
import Slide from './slide.vue'
import Channel from './channel.vue'
import Starlist from './starlist.vue'
import Hardware from './hardware.vue'
import Match from './match.vue'
import Accessories from './accessories.vue'
import Ad from './ad.vue'
import Recommend from './recommend.vue'
import Review from './review.vue'
import Content from './content.vue'
    export default {
        components: {
            Nav,
            Slide,
            Channel,
            Starlist,
            Hardware,
            Match,
            Accessories,
            Ad,
            Recommend,
            Review,
            Content
        }
    }
</script>

<style lang="scss" module>
    
</style>
