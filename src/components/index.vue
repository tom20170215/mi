<template>
    <div>
        <banner></banner>
        <Head/>
        <ContainerIndex/>
        <Footer></Footer>
        <Map></Map>
        <Barlist></Barlist>
    </div>
</template>

<script>
import Banner from './banner'
import Head from './head'
import ContainerIndex from './contain/containIndex'
import Map from './map'
import Footer from './footer'
import Barlist from './barlist'
export default {
    components: {
        Banner,
        Head,
        ContainerIndex,
        Map,
        Footer,
        Barlist
    }
};
</script>

<style lang="scss" module>
</style>

