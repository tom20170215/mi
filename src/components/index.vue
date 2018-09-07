<template>
    <div>
        <Head/>
        <ContainerIndex/>
        <Footer></Footer>
    </div>
</template>

<script>
import Head from './head'
import ContainerIndex from './contain/containIndex'
import Footer from './footer'
export default {
    components: {
        Head,
        ContainerIndex,
        Footer
    }
};
</script>

<style lang="scss" module>
</style>

