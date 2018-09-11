<template>
    <div>
        <Head/>
        <ContainerIndex/>
        <Footer></Footer>
        <Map></Map>
    </div>
</template>

<script>
import Head from './head'
import ContainerIndex from './contain/containIndex'
import Map from './map'
import Footer from './footer'
export default {
    components: {
        Head,
        ContainerIndex,
        Map,
        Footer
    }
};
</script>

<style lang="scss" module>
</style>

